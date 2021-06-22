import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import {
  Form,
  Segment,
  Header,
  Dropdown,
  Button,
  Input,
} from "semantic-ui-react";
import * as Yup from "yup";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import EmployerService from "../../services/employerService";
import WorkTypeService from "../../services/workTypeService";
import JobTypeService from "../../services/jobTypeService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
export default function JobAdvertisementForm() {
  const [cities, setCity] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((results) => setCity(results.data.data));
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAllJobPositions()
      .then((jobPosResult) => setJobPositions(jobPosResult.data.data));

    let employerService = new EmployerService();
    employerService
      .getAllEmployers()
      .then((employerResult) => setEmployers(employerResult.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getAll()
      .then((workTypeResult) => setWorkTypes(workTypeResult.data.data));

    let jobTypeService = new JobTypeService();
    jobTypeService
      .getAll()
      .then((jobTypeResult) => setJobTypes(jobTypeResult.data.data));
  }, []);

  const jobPositionSelection = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.jobTitle,
    value: jobPosition.id,
  }));

  const jobTypeSelection = jobTypes.map((jobType, index) => ({
    key: index,
    text: jobType.jobType,
    value: jobType.id,
  }));

  const workTypeSelection = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workType,
    value: workType.id,
  }));

  const citySelection = cities.map((city, index) => ({
    key: index,
    text: city.city,
    value: city.id,
  }));

  //auth gelene kadar
  const EmployerSelection = employers.map((employer, index) => ({
    key: index,
    text: employer.companyName,
    value: employer.id,
  }));

  const formik = useFormik({
    initialValues: {
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
      let jobAdvertisement = {
        jobDescription: values.jobDescription,
        jobPositionId: values.jobPositionId,
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        openPosition: values.openPosition,
        applicadionDeadline: values.applicadionDeadline,
        employerId: values.employerId,
        jobTypeId: values.jobTypeId,
        workTypeId: values.workTypeId,
        cityId: values.cityId,
      };
      JobAdvertisementService.addJobAdvert(jobAdvertisement).then((result) => {
        console.log(result.data);
      });
    },
  });
  return (
    <div>
      <Segment>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Header>Job Advertisement</Header>
          </div>
          <Form.Field>
            <label>Job Position</label>
            <Dropdown
              placeholder="Job Position"
              fluid
              selection
              id="jobPositionId"
              onChange={(fieldName, value) =>
                formik.setFieldValue("jobPositionId", value.value)
              }
              value={formik.values.jobPositionId}
              options={jobPositionSelection}
            ></Dropdown>
            {formik.errors.jobPositionId && formik.touched.jobPositionId && (
              <div style={{ color: "red" }}>{formik.errors.jobPositionId}</div>
            )}
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <Dropdown
              placeholder="City"
              fluid
              selection
              id="cityId"
              onChange={(fieldName, value) =>
                formik.setFieldValue("cityId", value.value)
              }
              value={formik.values.cityId}
              options={citySelection}
            ></Dropdown>
            {formik.errors.cityId && formik.touched.cityId && (
              <div style={{ color: "red" }}>{formik.errors.cityId}</div>
            )}
          </Form.Field>

          <Form.Field>
            <label>Employer</label>

            <Dropdown
              placeholder="Employer"
              fluid
              selection
              id="employerId"
              onChange={(fieldName, value) =>
                formik.setFieldValue("employerId", value.value)
              }
              value={formik.values.employerId}
              options={EmployerSelection}
            ></Dropdown>
            {formik.errors.employerId && formik.touched.employerId && (
              <div style={{ color: "red" }}>{formik.errors.employerId}</div>
            )}
          </Form.Field>
          <Form.Field>
            <label>Work Type</label>
            <Dropdown
              placeholder="Work Type"
              fluid
              selection
              id="workTypeId"
              onChange={(fieldName, value) =>
                formik.setFieldValue("workTypeId", value.value)
              }
              value={formik.values.workTypeId}
              options={workTypeSelection}
            ></Dropdown>
            {formik.errors.workTypeId && formik.touched.workTypeId && (
              <div style={{ color: "red" }}>{formik.errors.workTypeId}</div>
            )}
          </Form.Field>
          <Form.Field>
            <label>Job Type</label>
            <Dropdown 
              placeholder="Job Type"
              fluid
              selection
              id="jobTypeId"
              onChange={(fieldName, value) =>
                formik.setFieldValue("jobTypeId", value.value)
              }
              value={formik.values.jobTypeId}
              options={jobTypeSelection}
            ></Dropdown>
            {formik.errors.jobTypeId && formik.touched.jobTypeId && (
              <div style={{ color: "red" }}>{formik.errors.jobTypeId}</div>
            )}
          </Form.Field>
          <Form.Group className="form-field-min-max">
            <Input
              placeholder="Max Salary"
              label="Max Salary"
              type="number"
              id="maxSalary"
              onChange={formik.handleChange}
              value={formik.values.maxSalary}
            />
            {formik.errors.maxSalary && formik.touched.maxSalary && (
              <div style={{ color: "red" }}>{formik.errors.maxSalary}</div>
            )}

            <Input
              className="form-input-min-max"
              placeholder="Min Salary"
              label="Min Salary"
              type="number"
              id="minSalary"
              onChange={formik.handleChange}
              value={formik.values.minSalary}
            />
            {formik.errors.minSalary && formik.touched.minSalary && (
              <div style={{ color: "red" }}>{formik.errors.minSalary}</div>
            )}
          </Form.Group>
          <Form.Group className="form-field-min-max">
            <Input
              placeholder="Open Position"
              type="number"
              id="openPosition"
              label="Open Position"
              onChange={formik.handleChange}
              value={formik.values.openPosition}
            />
            {formik.errors.openPosition && formik.touched.openPosition && (
              <div style={{ color: "red" }}>{formik.errors.openPosition}</div>
            )}

            <Input
              placeholder="Application Deadline"
              type="date"
              id="applicationDeadline"
              className="form-input-min-max"
              label="Application Deadline"
              onChange={formik.handleChange}
              value={formik.values.applicationDeadline}
            />
            {formik.errors.applicationDeadline &&
              formik.touched.applicationDeadline && (
                <div style={{ color: "red" }}>
                  {formik.errors.applicationDeadline}
                </div>
              )}
          </Form.Group>

          <Form.Field className="form-field-min-max">
            <textarea
            
              placeholder="Job Description"
              style={{ height: 150, width: 500 }}
              value={formik.values.description}
              name="description"
              onChange={formik.handleChange}
            />
            {formik.errors.description && formik.touched.description && (
              <div style={{ color: "red" }}>{formik.errors.description}</div>
            )}
          </Form.Field>
          <div>
            <Button content="Add" primary type="submit" />
          </div>
        </form>
      </Segment>
    </div>
  );
}
