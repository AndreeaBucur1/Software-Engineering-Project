import "./styled";
import React, { useState } from "react";
import { Components } from "./styled";
import { chooseProgram, scanItems, startProgram } from "./call";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function App() {
  const [clothes, setClothes] = useState([]);
  const [fabric, setFabric] = useState("");
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("");
  const [soil, setSoil] = useState("");

  const [state, setState] = useState("scanItems");
  const [program, setProgram] = useState("");
  const [error, setError] = useState(undefined);

  const washingMachineId = 1;

  function handleAddCloth() {
    if (fabric === "" || color === "") return;
    setClothes((prevClothes) => {
      return [
        ...prevClothes,
        {
          fabric: fabric,
          color: color,
        },
      ];
    });
    setFabric("");
    setColor("");
  }

  async function onStartPress() {
    const data =  await startProgram(washingMachineId, program);
    if(data){
      setError(data.description);

    }
    setState("loading");
  }

  async function onChooseProgram() {
    const _program = await chooseProgram(clothes, parseInt(weight), parseInt(soil));
    if(_program) {
      setProgram(_program);
      setState("start");
    }
    else
    {
      setError("Could not find a program")
      setState("scanItems");
    }

  }

  const dismissToast = () => {
    setError(undefined);
  };

  async function handleScanItems() {
    if (clothes.length === 0 || weight === "" || soil === "") {
      setError("All fields must be completed");
      return;
    }
    const result = await scanItems(clothes, parseInt(weight), parseInt(soil));
    if (result) {
      setError(result);
      setClothes([])
    } else {
      setState("chooseProgram");
    }
  }

  return (
    <Components.Container>
      <Components.Image src={require("./washing.png")} />

      {state === "scanItems" ? (
        <Components.DataContainer>
          <Components.DataRow>
            <Components.Wrapper>
              <Components.Title>{"Fabric"}</Components.Title>
              <Components.InputText
                autoCapitalize={"none"}
                value={fabric}
                onChange={(event) => {
                  setFabric(event.target.value);
                }}
              />
            </Components.Wrapper>
            <Components.Wrapper>
              <Components.Title>{"Color"}</Components.Title>
              <Components.InputText
                autoCapitalize={"none"}
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </Components.Wrapper>

            <Components.Button onClick={handleAddCloth}>
              <Components.ButtonText>{"Add cloth"}</Components.ButtonText>
            </Components.Button>
          </Components.DataRow>

          <Components.DataRow>
            <Components.Wrapper>
              <Components.Title>{"Weight(1-10)"}</Components.Title>
              <Components.InputText
                autoCapitalize={"none"}
                value={weight}
                onChange={(event) => {
                  setWeight(event.target.value);
                }}
              />
            </Components.Wrapper>
            <Components.Wrapper>
              <Components.Title>{"Soil Level(1-3)"}</Components.Title>
              <Components.InputText
                autoCapitalize={"none"}
                value={soil}
                onChange={(event) => {
                  setSoil(event.target.value);
                }}
              />
            </Components.Wrapper>
            <Components.Button onClick={handleScanItems}>
              <Components.ButtonText>{"Scan items"}</Components.ButtonText>
            </Components.Button>
          </Components.DataRow>
        </Components.DataContainer>
      ) : state === "chooseProgram" ? (
        <Components.StartContainer>
          <Components.Button onClick={onChooseProgram}>
            <Components.ButtonText>{"Choose program"}</Components.ButtonText>
          </Components.Button>
        </Components.StartContainer>
      ) : state === "start" ? (
        <Components.StartContainer>
          <Components.Title>{"Program: " + program}</Components.Title>
          <Components.Button onClick={onStartPress}>
            <Components.ButtonText>{"Start program"}</Components.ButtonText>
          </Components.Button>
        </Components.StartContainer>
      ) : (
        <Components.LoaderContainer>
          <Components.CircularProgress size={32} />
        </Components.LoaderContainer>
      )}

      <Snackbar
        transitionDuration={0}
        open={!!error}
        autoHideDuration={2500}
        onClose={dismissToast}
      >
        <MuiAlert
          elevation={6}
          onClose={dismissToast}
          sx={{ width: "100%" }}
          variant="filled"
          severity={"error"}
        >
          <Components.ErrorText>{error}</Components.ErrorText>
        </MuiAlert>
      </Snackbar>
    </Components.Container>
  );
}

export default App;
