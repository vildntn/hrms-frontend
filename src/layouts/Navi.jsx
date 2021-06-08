import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item name="HRMS" />
        <Menu.Item name="messages" />
        <Menu.Item name="Search Job" />

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu inverted>
            <Menu.Item>
              <Button primary>Sign in</Button>
            </Menu.Item>

            <Menu.Item>
              <Button>Sign up</Button>
            </Menu.Item>
          </Menu>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
