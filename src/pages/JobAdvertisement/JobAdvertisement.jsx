import React, { useState, useEffect } from "react";
import {
  Icon,
  Label,
  Menu,
  Table,
  Card,
  Image,
  Button,
} from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";



export default function JobAdvertisement() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
    console.log(jobAdvertisements);
  }, []);
  return (
    <div>
      <Card.Group>
       
          {jobAdvertisements.map((jobAdvertisement) => (
        
            <Card fluid key={jobAdvertisement.id}>
              <Card.Content>
                <Image
                  floated="left"
                  size="tiny"
                  src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                />
                <Card.Header>
                  {jobAdvertisement?.jobTitle}
                </Card.Header>
                <Card.Meta>{jobAdvertisement?.companyName} </Card.Meta>
                <Card.Meta><span> {jobAdvertisement.cityName}</span></Card.Meta>
                <Card.Description>
                  {jobAdvertisement.Description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
         
          ))}
      
      </Card.Group>
      
      {/* <div className="list-items">
        <div className="ad-card-content">
          <div className="ad-card-row">
            <div className="row-k-ad-card">
              <div className="row-k">

              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City Name</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max salary</Table.HeaderCell>
            <Table.HeaderCell>Open Position</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            //productsları map et şu jsx üret
            jobAdvertisements.map((jobAdvertisements) => (
              <Table.Row key={jobAdvertisements.id}>
                <Table.Cell>{jobAdvertisements.jobTitle}</Table.Cell>
                <Table.Cell>{jobAdvertisements.companyName}</Table.Cell>
                <Table.Cell>{jobAdvertisements.cityName}</Table.Cell>
                <Table.Cell>{jobAdvertisements.minSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisements.maxSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisements.openPosition}</Table.Cell>
                <Table.Cell>{jobAdvertisements.applicationDeadline}</Table.Cell>
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
      </Table> */}
    </div>
  );
}
