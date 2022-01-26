import {Machine, ProjectError, Notification} from "../types";

export const getAllMachines = async (id: string): Promise<Machine[] | ProjectError> => {
    try {
        // const result:any = await fetch('http://localhost:8081/washing-machines/get-all', {
        //     method: "GET",
        //     headers: { 'Content-Type': 'application/json'},
        // })
        //
        // const data = result.json()
        const data = [{id: '11111'}, {id: 'aaa'}]
        return data.map((item: any) => {return {id: item.id}})
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

        const data = result.json()
        return data.id;
    } catch (error) {
        console.log(error);
        return { errorMessage: (error as any).message } as ProjectError;
    }
};

export const getAllNotifications = async (userId: string): Promise<Notification[] | ProjectError> => {
    try {
        // const result:any = await fetch(`http://localhost:8081/washing-machines/get-all-notification`, {
        //     method: "GET",
        //     headers: { 'Content-Type': 'application/json'},
        //     body: JSON.stringify({})
        // })
        //
        // const data = result.json()
        // return data.map((item:any) =>  { return {id: item.id, message:item.message}})

        return [{id: '1', message: "You get .."}]
    } catch (error) {
        console.log(error);
        return { errorMessage: (error as any).message } as ProjectError;
    }
};
