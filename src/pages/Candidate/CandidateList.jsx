import React, { useState, useEffect} from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import CandidateService from '../../services/candidateService'

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  useEffect(()=>{
    let candidateService= new CandidateService()
    candidateService.getAllcandidates().then(result=>setCandidates(result.data.data))
 },[])
return (
  <div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Email </Table.HeaderCell>
          <Table.HeaderCell>BirthDate</Table.HeaderCell>
        </Table.Row>
      </Table.Header>    
      <Table.Body>
        {
          //productsları map et şu jsx üret
          candidates.map((candidates) => (
            <Table.Row key={candidates.id}>
              <Table.Cell>{candidates.firstName}</Table.Cell>
              <Table.Cell>{candidates.lastName}</Table.Cell>
              <Table.Cell>{candidates.user.email}</Table.Cell>
              <Table.Cell>{candidates.birthYear}</Table.Cell>
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
);
}

