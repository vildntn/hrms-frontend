import React ,{useState}from "react";
import { Button, Dropdown,Container,  component, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { Link } from "react-router-dom";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  function handleSignOut() {
    setIsAuthenticated(false)
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
        <Menu.Item name="HRMS" />
        <Menu.Item name="messages" />
        <Menu.Item name="Search Job" />
        <Menu.Menu position="right">
        <Menu.Item  as={Link} to="/jobAdvertisements"  >Post A Job</Menu.Item> 
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu inverted>
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>:  <SignedOut signIn={handleSignIn}/>}
     
          </Menu>
        </Menu.Menu>
        </Container>
        
      </Menu>
    </div>
  );
}
