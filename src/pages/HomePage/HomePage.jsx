import React from "react";
import ToolBar from "../../layouts/ToolBar/ToolBar";
import {  Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar/SideBar";
import JobAdvertisement from "../JobAdvertisement/JobAdvertisement";

export default function HomePage() {
  return (
    <div>
      <Grid style={{marginTop:50}}>
        <Grid.Row>
          <Grid.Column width={16}>
                <ToolBar />
    
          </Grid.Column>
        </Grid.Row>
 
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisement/>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
