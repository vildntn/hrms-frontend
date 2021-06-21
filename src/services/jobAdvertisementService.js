import axios from "axios"
export default class JobAdvertisementService{
 getAllJobAdvertisements(){
     return axios.get("http://localhost:8080/api/jobAdvertisements/getAllActiveJobAdvertisement")
 }


 addJobAdvert(jobAdvertisement){
    return axios.post("http://localhost:8080/api/jobAdvertisements/add", jobAdvertisement)
}

changeActiveJobAdvertByStaff(id){
    return axios.post("http://localhost:8080/api/jobAdvertisements/changeActiveJobAdvertByStaff?id=" + id)
}
}