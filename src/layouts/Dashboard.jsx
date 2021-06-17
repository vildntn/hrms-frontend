import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideBar from './SideBar'
import Content from './Content'
import { Route } from 'react-router';
import JobAdvertisementForm from '../pages/JobAdvertisement/JobAdvertisementForm';



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
                  <Route exact path ="/jobAdvertisements" component={JobAdvertisementForm}/>  
                  </Grid.Column>
              </Grid.Row>
          </Grid>
          
        </div>
    )
}
