import React from "react";
import { Grid } from "semantic-ui-react";
import CandiateList from "../pages/CandiateList";
import EmployerList from "../pages/EmployerList";
import StaffList from "../pages/StaffList";
export default function Section() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <EmployerList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <CandiateList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <StaffList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
