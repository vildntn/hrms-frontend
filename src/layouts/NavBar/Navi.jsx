import "./Navi.css";
import React, { useState } from "react";
import { Dropdown, Container, Menu } from "semantic-ui-react";
import SignedIn from "../SignedIn";
import SignedOut from "../SignedOut";
import { Link } from "react-router-dom";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  function handleSignOut() {
    setIsAuthenticated(false);
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu className="ui large secondary menu" fixed="top">
        <div className="ui container">
          <Menu.Item as={Link} to="/" name="techorse" />

          <Menu.Menu position="right">
            <Menu.Item name="messages" />
            <Menu.Item name="Search Job" as={Link} to="searchJob" />
            <Menu.Item name="Resume" />
            <Menu.Item as={Link} to="/jobAdvertisements">
              Post A Job
            </Menu.Item>
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              {isAuthenticated ? (
                <SignedIn signOut={handleSignOut} />
              ) : (
                <SignedOut signIn={handleSignIn} />
              )}
            </Menu.Item>
          </Menu.Menu>
        </div>
      </Menu>
    </div>
  );
}
