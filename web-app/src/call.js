import axios from "axios";

export const scanItems = async (items, weight, soilLevel) => {
  try {
     return axios.post('http://localhost:8081/washing-machines/scan-items',  {
          items,
          weight,
          soilLevel,
      }, { "Content-Type": "application/json" } )
          .then(res => {
              console.log(res.data, "data")
              return res?.data?.description
          })

  } catch (error) {
      console.log(error)
    return error?.description;
  }
};

export const chooseProgram = async (items, weight, soilLevel)  => {
  try {
      return axios.post('http://localhost:8081/washing-machines/choose-program',  {
          items,
          weight,
          soilLevel,
      }, { "Content-Type": "application/json" } )
          .then(res => {
              console.log(items)
              console.log(res?.data?.programName, "data")
              return res?.data?.programName
          })

  } catch (error) {
    return null;
  }
};

export const startProgram = async (id, program) => {
  try {console.log(program);
    const result = await fetch(
      "http://localhost:8081/washing-machines/start-program/2/program/" + program,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          id,
          program,
        },
      }
    );

    const data = await result.json();
    return data;
  } catch (error) {}
};
