import React from 'react'
import Content from './Content';
import { Route } from 'react-router';
import AddJobAdvertisement from '../pages/JobAdvertisement/AddJobAdvertisement';
import CandidateList from '../pages/JobSeeker/JobSeekerList';
import EmployerList from '../pages/Employer/EmployerList';
import StaffList from '../pages/Staff/StaffList';
import ActivationJobAdvertByStaff from '../pages/ActivationJobAdvertByStaff';
import SignUp from '../pages/SignUp';
import HomePage from '../pages/HomePage/HomePage';



export default function Dashboard() {
    return (
        <div>
              <Route exact path ="/" component={HomePage}/>         
                  <Route exact path ="/jobAdvertisements" component={AddJobAdvertisement}/>  
                  <Route exact path ="/staffs" component={StaffList}/>  
                  <Route exact path ="/employers" component={EmployerList}/>  
                  <Route exact path ="/candidates" component={CandidateList}/>  
                  <Route exact path ="/activationJobAdvertByStaff" component={ActivationJobAdvertByStaff}/>  
                  <Route exact path="/signup" component={SignUp}/> 
        </div>
    )
}
