import axios from "axios"
export default class CurriculumVitaeService{
 getAll(){
     return axios.get("http://localhost:8080/api/curriculumVitaes/getall")
 }
 getCurriculumVitaeByCandidateId(id){
     return axios.get("http://localhost:8080/api/curriculumVitaes/getCurriculumVitaeByCandidateId?id="+id)
 }
}