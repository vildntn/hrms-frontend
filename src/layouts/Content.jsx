import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertisement from "../pages/JobAdvertisement/JobAdvertisement";
export default function Content() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <JobAdvertisement/> 
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column width={12}>
            <CandiateList />
          </Grid.Column>
        </Grid.Row> */}
        {/* <Grid.Row>
          <Grid.Column width={12}>
            <StaffList />
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
      
    </div>
  );
}
