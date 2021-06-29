import React from "react";
import { Menu ,Container} from "semantic-ui-react";

export default function Footer() {
  return (
      <div>
        
 <Menu inverted fixed="bottom" >
     <Container>
     <div className="ui inverted vertical segment" style={{ padding: 5 }}>
        <div className="ui container">
          <div className="ui inverted stackable divided grid">
            <div className="row">
              <div className="three wide column">
                <h4 className="ui inverted header">About</h4>
                <div className="list" className="ui inverted link list">
                  <a role="listitem" className="item">
                    Sitemap
                  </a>
                  <a role="listitem" className="item">
                    Contact Us
                  </a>
                  <a role="listitem" className="item">
                    Religious Ceremonies
                  </a>
                  <a role="listitem" className="item">
                    Gazebo Plans
                  </a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Services</h4>
                <div role="list" className="ui inverted link list">
                  <a role="listitem" className="item">
                    Banana Pre-Order
                  </a>
                  <a role="listitem" className="item">
                    DNA FAQ
                  </a>
                  <a role="listitem" className="item">
                    How To Access
                  </a>
                  <a role="listitem" className="item">
                    Favorite X-Men
                  </a>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Footer Header</h4>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </Container>
     
    </Menu>
      </div>
   
  );
}
