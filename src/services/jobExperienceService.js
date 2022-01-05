import axios from "axios"
export default class JobExperienceService{
    getAllJobExperienceByCandidateIdByDate(id){
     return axios.get("http://localhost:8080/api/jobExperiences/getAllJobExperienceByCandidateIdByDate?id="+id)
 }
}