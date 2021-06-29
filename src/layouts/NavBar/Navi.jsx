import "./Navi.css";
import React, { useState } from "react";
import { Dropdown, Container, Menu, Input } from "semantic-ui-react";
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
      <div >
      <Menu className="ui navbar bg color" fixed="top">
        <Container>
          <Menu.Item className="ui orange header" as={Link} to="/" name="HRMS" />
          <Menu.Item  className="ui white text color" name="messages" />
          <Menu.Item  className="ui white text color" name="Search Job" />
          <Menu.Menu position="right">
            <Menu.Item  className="ui white text color" as={Link} to="/jobAdvertisements">
              Post A Job
            </Menu.Item>
            <Dropdown  className="ui white text color" item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Menu className="ui navbar bg color " >
              {isAuthenticated ? (
                <SignedIn signOut={handleSignOut} />
              ) : (
                <SignedOut signIn={handleSignIn} />
              )}
            </Menu>
     
        
          </Menu.Menu>
        </Container>
      
      </Menu>
      </div>
     
    {/* <div>
    <Menu style={{marginTop:74}} fixed>
    <Menu.Item>
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>

    <Menu.Item position='right'>
      <Input
        action={{ type: 'submit', content: 'Go' }}
        placeholder='Navigate to...'
      />
    </Menu.Item>
  </Menu>
    </div>
      */}
   
    </div>
  );
}
