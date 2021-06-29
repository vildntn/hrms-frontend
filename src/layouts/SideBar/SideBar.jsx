import React from "react";
import {
  Segment,
  Dropdown,
  Container,
  Divider,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import CityService from "../../services/cityService";
import { useState, useEffect } from "react";
import JobTypeService from "../../services/jobTypeService";
import WorkTypeService from "../../services/workTypeService";

export default function SideBar() {
  const [cities, setCities] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    let jobTypeService = new JobTypeService();
    let workTypeService=new WorkTypeService();
    cityService.getAll().then((result) => setCities(result.data.data));
    jobTypeService.getAll().then((result) => setJobTypes(result.data.data));
    workTypeService.getAll().then((result)=>setWorkTypes(result.data.data))
  }, []);

  const citySelection = cities.map((city, index) => ({
    key: index,
    text: city.city,
    value: city.id,
  }));



  return (
    <div>
      <Segment>
        <Container textAlign="left">
          <div className="Menu">
            <div className="ui icon search input">
              <i className="search icon"></i>
              <input type="text" name="Search" placeholder="Search&hellip;" />
            </div>
          </div>
          <Divider />
          <div>
            <div>
              <h5>City</h5>
            </div>
            <div>
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
          </div>
          <Divider />
          <div>
            <div>
              <div>
                <h5>Job Type</h5>
              </div>
              <div className="menu">
                <div className="ui custom control label">
                  <div className="scrolling menu">
                    {jobTypes.map((jobType) => (
                      <div
                        className="ui item checkbox"
                        data-value="item1"
                        key={jobType.id}
                        value={jobType}
                      >
                        <div className="ui control custom input">
                          <input type="checkbox" />
                          <label>{jobType.jobType}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <div>
              <div>
                <h5>Work Type</h5>
              </div>
              <div className="menu">
                <div className="ui custom control label">
                  <div className="scrolling menu">
                    {workTypes.map((workType) => (
                      <div
                        className="ui item checkbox"
                        data-value="item1"
                        key={workType.id}
                        value={workType}
                      >
                        <div className="ui control custom input">
                          <input type="checkbox" />
                          <label>{workType.workType}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
       <Divider/>
          <div>    
        <button className="ui fluid orange button">Apply Filter</button>
          </div>
        </Container>
       
      </Segment>
      {/* <Menu inverted icon="labeled" vertical>
        <Menu.Item as={Link} to="/staffs" name="Staff List" />
        <Menu.Item  as={Link} to="/employers" name="Employer List " />
        <Menu.Item as={Link} to="/candidates" name="Candidate List" />
        <Menu.Item as={Link} to="/activationJobAdvertByStaff" name="Activation Job Advert List" />
      </Menu> */}
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
