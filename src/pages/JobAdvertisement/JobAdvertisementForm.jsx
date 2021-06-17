import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Form, Segment, Header, Divider, Dropdown } from "semantic-ui-react";
import * as Yup from "yup";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import EmployerService from "../../services/employerService";
export default function JobAdvertisementForm() {
  const [cities, setCity] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [employers, setEmployers] = useState([]);


  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((results) => setCity(results.data.data));
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAllJobPositions()
      .then((jobPosResult) => setJobPositions(jobPosResult.data.data));
      let employerService=new EmployerService();
      employerService.getAllEmployers().then((employerResult)=>setEmployers(employerResult.data.data))
  }, []);

  const formik = useFormik({
    intitialValues: {
      jobPositionId: "",
      employerId: "",
      cityId: "",
      jobDescription: "",
      openPosition: "",
      maxSalary: "",
      minSalary: "",
      applicadionDeadline: "",
      workTypeId: "",
      jobTypeId: "",
    },
    validationSchema: Yup.object({
      jobPositionId: Yup.number().required("Required"),
      employerId: Yup.number().required("Required"),
      cityId: Yup.number().required("Required"),
      workTypeId: Yup.number().required("Required"),
      jobTypeId: Yup.number().required("Required"),
      jobDescription: Yup.string().required("Required"),
      maxSalary: Yup.number().required("Required"),
      minSalary: Yup.number().required("Required"),
      openPosition: Yup.number().required("Required"),
      applicadionDeadline: Yup.date().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, 2));
    },
  });
  return (
    <div>
      <Segment>
        <Form>
          <div>
            <Header>Job Advertisement</Header>
          </div>
          <Form.Field>
            <label>Job Position</label>
            <Dropdown placeholder="Job Position" fluid selection>
              <Dropdown.Menu>
                {jobPositions.map((jobPosition) => (
                  <Dropdown.Item key={jobPosition.id}>
                    {jobPosition.jobTitle}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <Dropdown placeholder="City" fluid selection>
              <Dropdown.Menu>
                {cities.map((city) => (
                  <Dropdown.Item key={city.id}>{city.city}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Field>

          <Form.Field>
            <label>Employer</label>
            <Dropdown placeholder="Employer" fluid selection >
            <Dropdown.Menu>
                {employers.map((employer) => (
                  <Dropdown.Item key={employer.user.id}>
                    {employer.companyName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Field>
          <Form.Field>
            <label>Work Type</label>
            <Dropdown placeholder="Work Type" fluid selection >
            <Dropdown.Menu>
                {jobPositions.map((jobPosition) => (
                  <Dropdown.Item key={jobPosition.id}>
                    {jobPosition.jobTitle}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Field>
          <Form.Field>
            <label>Job Type</label>
            <Dropdown placeholder="Job Type" fluid selection />
          </Form.Field>
          <Form.Group>
            <Form.Input
              placeholder="Max Salary"
              label="Max Salary"
              type="number"
            />
            <Form.Input
              placeholder="Min Salary"
              label="Min Salary"
              type="number"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>Open Position</label>
              <input placeholder="Open Position" type="number" />
            </Form.Field>
            <Form.Field>
              <label>Application Deadline</label>
              <input placeholder="Application Deadline" type="date" />
            </Form.Field>
          </Form.Group>

          <Form.Field
            id="form-textarea-control-opinion"
            label="Opinion"
            placeholder="Opinion"
            control="textarea"
            rows="5"
          />
        </Form>
      </Segment>
    </div>
  );
}
