import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar/SideBar";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import logo from "../../assets/ps-jpg.png";

export default function JobAdvertisement() {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  // const [favJobAdverts, setFavJobAdvert] = useState([]);
  //   const favJobAdvert={
  //     jobAdvertId:"",
  //     jobSeekerId:1,
  //     status:true
  //   }


  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    jobAdvertisementService
      .getAllJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
    console.log(jobAdvertisements);
  }, []);

  // function saveJobAdvert(id) {
  //   let favJobAdvert = {
  //     jobAdvertisement: { id: id },
  //     jobSeeker: { id: 1 },
  //     status: true,
  //   };
  //   jobAdvertisementService
  //     .addFavoriteJobAdvert(favJobAdvert)
  //     .then((result) => console.log(result.data.message))
  //     .catch((err) => alert(err));

  //   console.log(favJobAdverts);
  // }

  return (
    <>
      <div className="ui centered grid" style={{ marginTop: "5em" }}>
        <div className="row">
          <div className="three wide column">
            <SideBar />
          </div>

          <div className="eight wide column" >
            <h2>Job Listing</h2>
            <br />
             {
               jobAdvertisements.map((jobAdvert)=>{
                 console.log(jobAdvert)
                    const{id,jobTitle,jobType,workType,applicationDeadline,companyName
                    ,department,cityName}=jobAdvert
                return(
                  <div className="ui cards card--shadow" key={id}>
                  <div className="ui fluid card">
                    <div className="content">
                      <img src={logo} className="ui mini right floated image" />
                      <div className="ui centered grid job-list-favourite-time right floated " style={{marginRight:'2em'}}>
                        <div className="row" >
                          <a className="job-list-favourite order-2 icon-heart " href="#">
                            <Icon name="heart outline" ></Icon>
                          </a>
                        </div>
                        <div className="row" style={{paddingTop:'0'}}>
                          <span className="job-list-time order-1">
                            <Icon name="clock outline"></Icon>3H ago
                          </span>
                        </div>
                      </div>
                      <div class="header">
                        {jobTitle}
                        <span className="ml-1em work--type"> {jobType}</span>
                      </div>
                      <div class="meta">
                        {" "}
                        <ul className="list-unstyled">
                          <li>
                            <span style={{ marginRight: 3 }}>via</span>
                            <a href="employer-detail.html">{companyName}</a>
                          </li>
                          <li>
                            <Icon name="map marker alternate"></Icon>
                            {/* <i aria-hidden="true" className="orange map marker alternate"></i>  Parsippany, NJ 07054*/}
                           {cityName}
                          </li>
                          <li>
                            <Icon name="filter"></Icon>
                            {department}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                )
               })
             }

          </div>
        </div>
      </div>
    </>
  );
}
