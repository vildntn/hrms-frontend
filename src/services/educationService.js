import axios from "axios"
export default class EducationService{
    getAllEducationOrderByGraduatedDate(id){
     return axios.get("http://localhost:8080/api/jobExperiences/getAllEducationOrderByGraduatedDate?id="+id)
 }
}