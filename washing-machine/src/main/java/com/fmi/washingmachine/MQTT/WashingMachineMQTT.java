package com.fmi.washingmachine.MQTT;

import com.fmi.washingmachine.entity.Notification;
import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.repository.NotificationRepository;
import com.fmi.washingmachine.repository.WashingMachineRepository;
import com.fmi.washingmachine.repository.WashingProgramRepository;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class WashingMachineMQTT {


    public void mqtt(WashingMachine washingMachine, long time, NotificationRepository notificationRepository) {
        String subTopic = "program/ending";
        String pubTopic = "program/ended";
        String content = "The program has ended!";
        int qos = 0;
        String broker = "tcp://broker.emqx.io:1883";
        String clientId = "test_id";
        MemoryPersistence persistence = new MemoryPersistence();


        try {
            MqttClient client = new MqttClient(broker, clientId, persistence);

            // MQTT connection option
            MqttConnectOptions connOpts = new MqttConnectOptions();
            connOpts.setUserName("username");
            connOpts.setPassword("password".toCharArray());
            // retain session
            connOpts.setCleanSession(true);

            // set callback
            client.setCallback(new PushCallback());

            // establish a connection
            System.out.println("Connecting to broker: " + broker);
            client.connect(connOpts);

            System.out.println("Connected");
            System.out.println("Publishing message: " + content);

            // Subscribe
            client.subscribe(subTopic);

            // Required parameters for message publishing
            MqttMessage message = new MqttMessage(content.getBytes());
            message.setQos(qos);
            new Thread(new Runnable()
            {
                public void run()
                {
                    try {
                        Thread.sleep(time*100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    try {
                        client.publish(pubTopic, message);
                    } catch (MqttException e) {
                        e.printStackTrace();
                    }

                    Notification endNotification = new Notification("Washing program ended",new Date(),washingMachine);
                    notificationRepository.save(endNotification);
                }
            })
                    .run();


            client.disconnect();
            System.out.println("Disconnected");
            client.close();
        } catch (MqttException me) {
            System.out.println("reason " + me.getReasonCode());
            System.out.println("msg " + me.getMessage());
            System.out.println("loc " + me.getLocalizedMessage());
            System.out.println("cause " + me.getCause());
            System.out.println("excep " + me);
            me.printStackTrace();
        }
    }
}