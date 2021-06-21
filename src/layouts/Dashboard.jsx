import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideBar from './SideBar'
import Content from './Content'
import { Route } from 'react-router';
import AddJobAdvertisement from '../pages/JobAdvertisement/AddJobAdvertisement';
import CandidateList from '../pages/Candidate/CandidateList';
import EmployerList from '../pages/Employer/EmployerList';
import StaffList from '../pages/Staff/StaffList';
import ActivationJobAdvertByStaff from '../pages/ActivationJobAdvertByStaff';




export default function Dashboard() {
    return (
        <div>
            <Grid>
              <Grid.Row >
                  <Grid.Column width={4}>
                  <SideBar/>
                  </Grid.Column>
                  <Grid.Column width={12}>  
                  <Route exact path ="/" component={Content}/>         
                  <Route exact path ="/jobAdvertisements" component={AddJobAdvertisement}/>  
                  <Route exact path ="/staffs" component={StaffList}/>  
                  <Route exact path ="/employers" component={EmployerList}/>  
                  <Route exact path ="/candidates" component={CandidateList}/>  
                  <Route exact path ="/activationJobAdvertByStaff" component={ActivationJobAdvertByStaff}/>  
                  </Grid.Column>
              </Grid.Row>
          </Grid>
          
        </div>
    )
}
