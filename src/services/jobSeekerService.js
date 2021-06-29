import axios from "axios"
export default class JobSeekerService{
 getAll(){
     return axios.get("http://localhost:8080/api/jobSeekers/getall")
 }
}