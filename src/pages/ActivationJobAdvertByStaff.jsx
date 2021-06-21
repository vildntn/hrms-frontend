import React, { useState, useEffect } from "react";
import {
  Table,Menu,Icon,Button
} from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
export default function ActivationJobAdvertByStaff() {
       
    const [jobAdvertisements, setJobAdvertisements] = useState([]);
  
    
    useEffect(() => {
      let jobAdvertisementService = new JobAdvertisementService();
      jobAdvertisementService
        .getAllJobAdvertisements()
        .then((result) => setJobAdvertisements(result.data.data));
      console.log(jobAdvertisements);
    }, []);

    let changeActiveJobAdvertByStaff = (id) => {
      let jobAdvertisementService = new JobAdvertisementService();
      jobAdvertisementService
        .changeActiveJobAdvertByStaff(id)
        .then((result) => {
          console.log(result.data.message)})
  }
    return (
      <div>
        <div className="list-items">
          <div className="ad-card-content">
            <div className="ad-card-row">
              <div className="row-k-ad-card">
                <div className="row-k">
  
                </div>
              </div>
            </div>
          </div>
        </div> 
         <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Job Title</Table.HeaderCell>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>City Name</Table.HeaderCell>
              <Table.HeaderCell>Min Salary</Table.HeaderCell>
              <Table.HeaderCell>Max salary</Table.HeaderCell>
              <Table.HeaderCell>Open Position</Table.HeaderCell>
              <Table.HeaderCell>Deadline</Table.HeaderCell>
              <Table.HeaderCell>Work Type</Table.HeaderCell>
              <Table.HeaderCell>Job Type</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {

              jobAdvertisements.map((jobAdvertisements) => (
                <Table.Row key={jobAdvertisements.id}>
                  <Table.Cell>{jobAdvertisements.jobTitle}</Table.Cell>
                  <Table.Cell>{jobAdvertisements.companyName}</Table.Cell>
                  <Table.Cell>{jobAdvertisements.cityName}</Table.Cell>
                  <Table.Cell>{jobAdvertisements.minSalary}</Table.Cell>
                  <Table.Cell>{jobAdvertisements.maxSalary}</Table.Cell>
                  <Table.Cell>{jobAdvertisements.openPosition}</Table.Cell>
                  <Table.Cell>{jobAdvertisements.applicationDeadline}</Table.Cell>
                  <Table.Cell>{jobAdvertisements.workType}</Table.Cell>
                  <Table.Cell>{jobAdvertisements.jobType}</Table.Cell>
                  <Button  color='brown' onClick={()=>changeActiveJobAdvertByStaff(jobAdvertisements.id)}>Confirm</Button>
                </Table.Row>
              ))
            }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table> 
      </div>
    )
}
