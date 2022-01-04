import React from "react";

export default function Footer() {
  return (
    <div>
      <div style={{padding:"8em 0em",backgroundColor:"#691f74"}} class="ui  vertical segment">
        <div class="ui container">
          <div class="ui inverted stackable divided grid">
            <div class="row">
            <div class="four wide column">
                <h2 class="ui inverted header footer--title">techorse</h2>
                <h4>techorse34@gmail.com</h4>
                <h4>+9958749632545</h4>
              </div>
              <div class="three wide column">
                <h4 class="ui inverted header">About</h4>
                <div role="list" class="ui inverted link list">
                  <a role="listitem" class="item">
                    Sitemap
                  </a>
                  <a role="listitem" class="item">
                    Contact Us
                  </a>
                  <a role="listitem" class="item">
                    Religious Ceremonies
                  </a>
                  <a role="listitem" class="item">
                    Gazebo Plans
                  </a>
                </div>
              </div>
              <div class="three wide column">
                <h4 class="ui inverted header">Services</h4>
                <div role="list" class="ui inverted link list">
                  <a role="listitem" class="item">
                    Banana Pre-Order
                  </a>
                  <a role="listitem" class="item">
                    DNA FAQ
                  </a>
                  <a role="listitem" class="item">
                    How To Access
                  </a>
                  <a role="listitem" class="item">
                    Favorite X-Men
                  </a>
                </div>
              </div>
              <div class="six wide column">
                <h4 class="ui inverted header">Footer Header</h4>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
