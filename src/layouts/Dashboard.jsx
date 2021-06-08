import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideBar from './SideBar'
import Detail from './Detail'



export default function Dashboard() {
    return (

        <div>
            <Grid>
              <Grid.Row >
                  <Grid.Column width={4}>
                  <SideBar/>
                  </Grid.Column>
                  <Grid.Column width={12}>            
                    <Detail/>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
          
        </div>
    )
}
