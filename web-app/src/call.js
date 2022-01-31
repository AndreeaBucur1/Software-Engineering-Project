export const scanItems = async (items, weight, soilLevel) => {
  try {
    // const result = await fetch(
    //   "http://localhost:8081/washing-machines/scan-items",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: {
    //       items,
    //       weight,
    //       soilLevel,
    //     },
    //   }
    // );
    //
    // await result.json();
  } catch (error) {
    return "Items do not match";
  }
};

export const chooseProgram = async () => {
  try {
    const result = await fetch(
      "http://localhost:8081/washing-machines/choose-program",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await result.json();
    if (data !== null) {
      return data;
    } else {
      return "default";
    }
  } catch (error) {
    return "default";
  }
};

export const startProgram = async (id, program) => {
  try {
    const result = await fetch(
      "http://localhost:8081/washing-machines/start-program",
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
  } catch (error) {}
};
