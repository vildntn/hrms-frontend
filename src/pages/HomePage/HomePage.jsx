import React, { useEffect, useState } from "react";
import logo from "../../assets/ps-jpg.png";
import jobSearch from "../../assets/img-homee.png";
import JobAdvertisementService from "../../services/jobAdvertisementService";

import { Icon } from "semantic-ui-react";
import Footer from "../../layouts/Footer/Footer";

export default function HomePage() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    jobAdvertisementService
      .getAllJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);


  return (
    <div>
      <div
        style={{
          minHeight: "700px",
          padding: "1em 0em",
          backgroundImage: `url(${jobSearch})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundColor: "#fff",
        }}
        className="ui inverted vertical center aligned segment bg-image"
      >
        {/* <div class="ui large inverted pointing secondary menu">
          <div class="ui container">
            <a class="active item">Home</a>
            <a class="item">Work</a>
            <a class="item">Company</a>
            <a class="item">Careers</a>
            <div class="right item">
              <a class="ui inverted button" role="button">
                Log in
              </a>
              <a
                style={{marginLeft:"0.5em"}}
                class="ui inverted button"
                role="button"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div> */}
        <div className="ui  container" style={{ textAlign: "left" }}>
          <h1
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: "0",
              marginTop: "3em",
            }}
            class="ui header main--title"
          >
            Imagine-a-Company
          </h1>
          <h2
            style={{
              fontSize: "1.7em",
              fontWeight: "normal",
              marginTop: "1.5em",
            }}
            className="ui inverted header"
          >
            Do whatever you want when you want to.
          </h2>
          <button className="ui huge yellow button">
            Get Started<i aria-hidden="true" className="right arrow icon"></i>
          </button>
        </div>
      </div>
      {/* <div
        className="ui vertically padded grid"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="ui center aligned container">
          <div className="row">
            <h1>It's Time To Get Started with New oppotunities</h1>
            <p>Find Jobs, Employment & Career Opportunities</p>
            <form className="ui form">
              <div className="equal with fields">
                <div className="field">
                  <div class="ui input">
                    <input type="text" placeholder="Job Name..." />
                  </div>
                </div>
                <div className="field" style={{ height: 196, width: 196 }}>
                  <Dropdown
                    clearable
                    fluid
                    multiple
                    search
                    selection
                    options={citySelection}
                    placeholder="Select City"
                  />
                </div>
                <div className="field">
                  <button class="ui orange button">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* --------------------------Top Companies ---------------------------------------------- */}
      <div style={{ padding: "8em 0em" }} class="ui vertical segment">
        <div className="ui center aligned container stackable middle aligned grid">
          <div className="ui text container" style={{ marginBottom: "1em" }}>
            <h2 className="vertical-segment--category__title">Top Companies</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit tenetur ab expedita eaque velit quod quasi dolor
              facilis illo, voluptate hic saepe perferendis pariatur? Illum
              quibusdam incidunt laborum mollitia ipsum.
            </p>
            <br />
          </div>
          <div className="ui cards">
            <div className="ui card employer--card">
              <div className="image" style={{ padding: "2em 0" }}>
                <div className="ui small circular image img-opacity">
                  <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                </div>
              </div>
              <div className="content">
                <div className="header">Matthew</div>
                <div className="meta">
                  <span className="date">Joined in 2015</span>
                </div>
                <div className="description">
                  <button className="ui yellow button">Detay</button>
                </div>
              </div>
            </div>
            <div class="ui card employer--card">
              <div class="image" style={{ padding: "2em 0" }}>
                <div className="ui small circular image img-opacity">
                  <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                </div>
              </div>
              <div className="content">
                <div className="header">Matthew</div>
                <div className="meta">
                  <span className="date">Joined in 2015</span>
                </div>
                <div className="description">
                  <button className="ui yellow button">Detay</button>
                </div>
              </div>
            </div>
            <div className="ui card employer--card">
              <div className="image" style={{ padding: "2em 0" }}>
                <div className="ui small circular image img-opacity">
                  <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                </div>
              </div>
              <div className="content">
                <div className="header">Matthew</div>
                <div className="meta">
                  <span className="date">Joined in 2015</span>
                </div>
                <div className="description">
                  <button className="ui yellow button">Detay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------ Available  Positions------------------- */}
      <div style={{ padding: "8em 0em" }} class="ui vertical segment">
        <div className="ui container stackable middle aligned grid">
          <div className="ui container">
            <h2>Available Positions</h2>
            <div>
              <div class="ui pointing secondary  menu">
                <div className="right menu">
                  <a className="active item">Home</a>
                  <a className="item">Messages</a>
                  <a className="item">Friends</a>
                </div>
              </div>
            </div>
           
            <div className="ui cards" style={{ paddingTop: "3em" }}>
            {jobAdvertisements.slice(0, 5).map((job) => {
              console.log(job)
              const {jobTitle,cityName,address,companyName, jobType, workType, department}=job;
              return(

              <div className="ui fluid card" style={{ padding: "1em 2em" }}>
              <div className="content">
                {/* <img
                  src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                  class="ui mini right floated image"
                /> */}
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                  className="ui tiny left floated circular  middle aligned image"
                />
                <div className="right floated">
                  <button className="ui yellow button">Apply</button>
                </div>
                <div
                  className="right floated  ui four column grid job--card__home"
                  style={{ marginRight: "2em" }}
                >
                  <div className="column" style={{padding:"1em .8em"}}>
                    <h4>Work Type</h4>
                    <span>{workType}</span>
                  </div>
                  <div className="column">
                    <h4>Duration</h4>
                    <span>{jobType}</span>
                  </div>
                  <div className="column">
                    <h4>Location</h4>
                    <span>{cityName}</span>
                  </div>
                  <div className="column" style={{ paddingLeft: "2em" }}>
                    <a
                      className="job-list-favourite order-2 icon-heart "
                      href="#"
                    >
                      <Icon name="heart outline"></Icon>
                    </a>
                    <div className="row" style={{ paddingTop: "1em" }}>
                      <span className="job-list-time order-1">
                        <Icon name="clock outline"></Icon>3H ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="header">
                  <h2>Jenny Lawrence</h2>
                </div>
                <div className="meta">
                  <ul className="list-unstyled">
                    <li>
                      <span style={{ marginRight: 3 }}>via</span>
                      <a href="employer-detail.html">{companyName}</a>
                    </li>
                    <li>
                      <Icon name="map marker alternate"></Icon>
                      {/* <i aria-hidden="true" className="orange map marker alternate"></i>  Parsippany, NJ 07054*/}
                      {address}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              )
            })}
              
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------Footer----------------------------------- */}
      <Footer/>
    </div>
  );
}
