import axios from "axios"
export default class JobAdvertisementService{
 getAllJobAdvertisements(){
     return axios.get("http://localhost:8080/api/jobAdvertisements/getAllActiveJobAdvertisement")
 }
}