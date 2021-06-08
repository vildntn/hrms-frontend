import axios from "axios"
export default class StaffService{
 getAllStaffs(){
     return axios.get("http://localhost:8080/api/staffs/getall")
 }
}