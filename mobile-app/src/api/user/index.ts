import {Machine, ProjectError, Notification} from "../types";

export const getAllMachines = async (id: string): Promise<Machine[] | ProjectError> => {
    try {
        const result:any = await fetch('http://localhost:8081/washing-machines', {
            method: "GET",
            headers: { 'Content-Type': 'application/json'},
        })

        const data = await result.json()
        return data.map((item: any) => {return {id: item.washingMachineId}})
    } catch (error) {
        console.log(error);
        return { errorMessage: (error as any).message } as ProjectError;
    }
};


export const addMachine = async (userId: string, washingMachineId: string): Promise<Machine | ProjectError> => {
    try {
        const result:any = await fetch(`http://localhost:8081/washing-machines/add-washing-machine/userId/${userId}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({washingMachineId})
        })

        const data = await result.json()
        return data.id;
    } catch (error) {
        console.log(error);
        return { errorMessage: (error as any).message } as ProjectError;
    }
};

export const getAllNotifications = async (id: string): Promise<Notification[] | ProjectError> => {
    try {
        const result:any = await fetch(`http://localhost:8081/notifications/washing-machine-id/${id}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json'},
        })

        const data = await result.json()
        console.log(data)
        return data.map((item:any) =>  { return {id: item.id, message:item.message}})
    } catch (error) {
        console.log(error);
        return { errorMessage: (error as any).message } as ProjectError;
    }
};

export const startMachine = async (id: string, program:string): Promise<void> => {
    try {
        const result:any = await fetch(`http://localhost:8081/washing-machines/start-program/${id}/program/${program}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},

        })

        await result.json();

    } catch (error) {
        console.log(error);

    }
};
