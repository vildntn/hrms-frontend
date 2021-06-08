import React, { useState, useEffect} from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import EmployerService from '../services/employerService'
export default function EmployerList() {

  const [employers, setEmployers] = useState([]);
   useEffect(()=>{
      let employerService= new EmployerService()
      employerService.getAllEmployers().then(result=>setEmployers(result.data.data))
   })
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Web Address</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            //productsları map et şu jsx üret
            employers.map((employers) => (
              <Table.Row key={employers.id}>
                <Table.Cell>{employers.companyName}</Table.Cell>
                <Table.Cell>{employers.webAddress}</Table.Cell>
                <Table.Cell>{employers.phoneNumber}</Table.Cell>
                <Table.Cell>{employers.user.email}</Table.Cell>
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
