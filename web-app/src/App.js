import './App.css';
import ClothList from "./ClothList";
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import washing from './washing.png';
import ClothService from "./ClothService";
const washingMachineId = 1;
function App() {

  const [clothes, setClothes] = useState([]);
  const clothColorRef = useRef();
  const clothFabricRef = useRef();
  const clothWeightRef = useRef();
  const clothSoilLevelRef = useRef();

  const LOCAL_STORAGE_KEY = 'clothes';

  useEffect(() => {
      const storedClothes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(storedClothes) setClothes(storedClothes)
  }, [])

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(clothes))
      console.log(clothes)
  }, [clothes])

  function handleAddCloth(e) {
    const fabric = clothFabricRef.current.value;
    const color = clothColorRef.current.value;
    if (fabric === '') return
    setClothes(prevClothes => {
        return [...prevClothes, {
            // id: uuidv4(),
            fabric: fabric, color: color}]
    })
    clothFabricRef.current.value = null;
    clothColorRef.current.value = null;


  }

  function handleScanItems( ){
      // const weight = clothWeightRef.current.value;
      // const soilLevel = clothSoilLevelRef.current.value;
      console.log(document.getElementById("weight").value, document.getElementById("soilLevel").value);
      ClothService.createCloth(clothes,document.getElementById("weight").value, document.getElementById("soilLevel").value,washingMachineId)
      clothWeightRef.current.value = null;
      clothSoilLevelRef.current.value = null;
      setClothes([])
  }

  function handleClearClothes(){
      setClothes([])
  }

    useEffect(() => {
        document.body.style.background = '#F0F8FF';
    });

  return (
      <div className="Page">
        <img style={{width:'250px',margin:'30px'}} src={washing} alt="Logo" />
        {/*<ClothList clothes={clothes} />*/}
        <h2>Fabric :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color :</h2>
        <input id="fabric" ref={clothFabricRef} type="text" />&nbsp;&nbsp;
        <input id="color" ref={clothColorRef} type="text" />&nbsp;&nbsp;<br/>
        <h2>Weight(1-10) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soil Level(1-3) :</h2>
        <input id="weight" ref={clothWeightRef} type="text"/>&nbsp;&nbsp;
        <input id="soilLevel" ref={clothSoilLevelRef} type="text"/>&nbsp;&nbsp;
        <Button variant="outlined" color="primary" endIcon={<AddIcon />} onClick={handleAddCloth}>Add cloth</Button>&nbsp;
        <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} onClick={handleClearClothes}>Clear</Button>&nbsp;
        <Button variant="outlined" endIcon={<DeleteIcon />} onClick={handleScanItems}>Scan Items</Button>
      </div>

  );
}

export default App;
