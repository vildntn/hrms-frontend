import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default function Categories() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item as={Link} to="/staffs" name="Staff List" />
        <Menu.Item  as={Link} to="/employers" name="Employer List " />
        <Menu.Item as={Link} to="/candidates" name="Candidate List" />
        <Menu.Item as={Link} to="/activationJobAdvertByStaff" name="Activation Job Advert List" />
      </Menu>
      {/* <div>
        <div>
          <div>
          <Dropdown placeholder='State' search selection  />
          </div>
          <div>
          <Dropdown placeholder='State' search selection  />
          </div>
        </div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
}
