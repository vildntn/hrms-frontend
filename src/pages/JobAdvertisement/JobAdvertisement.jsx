import React, { useState, useEffect } from "react";
import { Card, Image, Button, Container, Header, Icon } from "semantic-ui-react";
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
              <div className="column">
                <Image
                  floated="left"
                  size="tiny"
                  src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                />
              </div>
              <div className="column">
                <Container textAlign="left">
                  <div>
                    <Header as="h3">{jobAdvertisement?.jobTitle}</Header>
                  </div>
                  <div>
                    <label>{jobAdvertisement?.companyName}</label>
                  </div>
                  <Card.Meta>
                    <p> {jobAdvertisement.cityName}</p>
                  </Card.Meta>
                  <Card.Description>
                    {jobAdvertisement.Description}
                  </Card.Description>

               
                </Container>
                <div className="column">
                <Container textAlign="right">
                    <Button inverted color='orange' icon>  <Icon name='heart outline' /> <span></span>Save</Button>
                  </Container>
                </div>
              </div>
          
                <div className="equal width fields">
                  <div className="field">
                  <label>{jobAdvertisement?.jobType}</label>
                  </div>
              <div className="field">
              <span>{jobAdvertisement?.workType}</span>
              </div>
                </div>
            
            </Card.Content>
            {/* <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content> */}
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
