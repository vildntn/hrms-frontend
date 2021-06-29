import React from "react";
import { Grid } from "semantic-ui-react";
import SideBar from './SideBar/SideBar'
import JobAdvertisement from "../pages/JobAdvertisement/JobAdvertisement";
export default function Content() {
  return (
    <div style={{marginTop:60}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisement />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
