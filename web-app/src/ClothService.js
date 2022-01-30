import axios from "axios";
class ClothService {
    createCloth(clothes, weight, soilLevel,id){
        console.log(clothes)
        axios.post(`http://localhost:8081/washing-machines/scan-items`, {
            "items": clothes,
            "weight":weight,
            "soilLevel":soilLevel

        } ).then((res) => console.log("scanner",res.data));
    }
}
export default new ClothService();