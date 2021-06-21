import axios from "axios"
export default class JobTypeService{
 getAll(){
     return axios.get("http://localhost:8080/api/jobTypes/getall")
 }
}