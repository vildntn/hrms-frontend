import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Dropdown,
  Form,
  TextArea,
  Label,
} from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import WorkTypeService from "../../services/workTypeService";
import JobTypeService from "../../services/jobTypeService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function JobAdvertisementAdd() {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    let jobTypeService = new JobTypeService();
    let workTypeService = new WorkTypeService();
    cityService.getAll().then((result) => setCities(result.data.data));
    jobPositionService
      .getAllJobPositions()
      .then((result) => setJobPositions(result.data.data));
    jobTypeService.getAll().then((result) => setJobTypes(result.data.data));
    workTypeService.getAll().then((result) => setWorkTypes(result.data.data));
  }, []);

  const getCities = cities.map((city, index) => ({
    key: index,
    text: city.city,
    value: city.id,
  }));
  const getJobPositions = jobPositions.map((position, index) => ({
    key: index,
    text: position.jobTitle,
    value: position.id,
  }));
  const getJobTypes = jobTypes.map((jobType, index) => ({
    key: index,
    text: jobType.jobType,
    value: jobType.id,
  }));
  const getWorkTypes = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workType,
    value: workType.id,
  }));

  const formik = useFormik({
    initialValues: {
      positionId: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      openPosition: "",
      jobDescription: "",
      applicationDeadline: "",
      workTypeId: "",
      jobTypeId: "",
      employerId: 41,
    },
    validationSchema: Yup.object({
      positionId: Yup.number().required("İş pozisyonu bilgisi seçiniz!"),
      cityId: Yup.string().required("Şehir bilgisi seçiniz!"),
      openPosition: Yup.number().required(
        "Alınacak eleman sayısı boş bırakılamaz!"
      ),
      jobDescription: Yup.string().required("Açıklama boş bırakılamaz!"),
      applicationDeadline: Yup.string().required(
        "Son başvuru tarihi boş bırakılamaz!"
      ),
      workTypeId: Yup.string().required("Çalışma tipi bilgisi seçiniz!"),
      jobTypeId: Yup.string().required("Çalışma zamanı tipi bilgisi seçiniz!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let jobAdvertisement = {
        //sol taraftakiler swagger'da jobAdvertisement eklerken gelen değişkenler, sağ taraftakiler ise initialValues kısmında belirlediklerimiz
        applicationDeadline: values.applicationDeadline,
        city: { id: values.cityId },
        employer: { id: values.employerId },
        jobPosition: { id: values.positionId },
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        openPosition: values.openPosition,
        jobDescription: values.jobDescription,
        workType: { id: values.workTypeId },
        jobType: { id: values.jobTypeId },
      };
      console.log(jobAdvertisement);
      jobAdvertisementService.addJobAdvert(jobAdvertisement).then((result) =>
        result.data.success
          ? toast.success(`İş İlanı Eklendi.`) && formik.resetForm() //formu sıfırlamak için
          : toast.error("İş İlanı Eklenemedi!")
      );
    },
  });

  return (
    <>
      <div style={{ padding: "8em 0em" }} class="ui vertical segment">
        <div className="ui container stackable middle aligned grid">
          <div className="ui text container">
            <div className="ui raised segment bg-gradient">
              <Form onSubmit={formik.handleSubmit}>
                <h3>Post New Job</h3>
                <div
                  style={{
                    textAlign: "left",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    padding: "1em",
                  }}
                >
                  <div className="field">
                    <label>City</label>
                    <Dropdown
                      style={{
                        fontFamily: "Arial",
                        marginTop: "1em",
                        fontWeight: "lighter",
                      }}
                      button
                      placeholder="choose city"
                      fluid
                      search
                      selection
                      id="cityId"
                      options={getCities}
                      onChange={(event, data) =>
                        formik.setFieldValue("cityId", data.value)
                      }
                      value={formik.values.cityId}
                    />
                    {formik.errors.cityId && formik.touched.cityId && (
                      <Label basic color="red" pointing>
                        {formik.errors.cityId}
                      </Label>
                    )}
                  </div>
                  <div className="field">
                    <label>Job Position</label>
                    <Dropdown
                      className="job--advert--lbl--inpt"
                      button
                      placeholder="Project Manager"
                      fluid
                      search
                      selection
                      id="positionId"
                      options={getJobPositions}
                      onChange={(event, data) =>
                        formik.setFieldValue("positionId", data.value)
                      }
                      value={formik.values.positionId}
                    />
                    {formik.errors.positionId && formik.touched.positionId && (
                      <Label basic color="red" pointing>
                        {formik.errors.positionId}
                      </Label>
                    )}
                  </div>
                  <div className="field">
                    <label>Work Type</label>
                    <Dropdown
                      className="job--advert--lbl--inpt"
                      button
                      placeholder="Remote.."
                      fluid
                      search
                      selection
                      id="workTypeId"
                      options={getWorkTypes}
                      onChange={(event, data) =>
                        formik.setFieldValue("workTypeId", data.value)
                      }
                      value={formik.values.workTypeId}
                      required
                    />
                    {formik.errors.workTypeId && formik.touched.workTypeId && (
                      <Label basic color="red" pointing>
                        {formik.errors.workTypeId}
                      </Label>
                    )}
                  </div>
                  <div className="field">
                    <label>Job Type</label>
                    <Dropdown
                      className="job--advert--lbl--inpt"
                      button
                      placeholder="Full Time"
                      fluid
                      search
                      selection
                      id="jobTypeId"
                      options={getJobTypes}
                      onChange={(event, data) =>
                        formik.setFieldValue("jobTypeId", data.value)
                      }
                      value={formik.values.jobTypeId}
                    />
                    {formik.errors.jobTypeId && formik.touched.jobTypeId && (
                      <Label basic color="red" pointing>
                        {formik.errors.jobTypeId}
                      </Label>
                    )}
                  </div>
                  <div className="field">
                    <label>Minimum Salary</label>
                    <Input
                      id="minSalary"
                      placeholder="$ Minimum"
                      fluid
                      className="job--advert--lbl--inpt"
                      onChange={formik.handleChange}
                      value={formik.values.minSalary}
                    ></Input>
                    {formik.errors.minSalary && formik.touched.minSalary && (
                      <Label basic color="red" pointing>
                        {formik.errors.minSalary}
                      </Label>
                    )}
                  </div>
                  <div className="field">
                    <label>Maximum Salary</label>
                    <Input
                      id="maxSalary"
                      placeholder="$ Maximum"
                      fluid
                      className="job--advert--lbl--inpt"
                      onChange={formik.handleChange}
                      value={formik.values.maxSalary}
                    ></Input>
                    {formik.errors.maxSalary && formik.touched.maxSalary && (
                      <Label basic color="red" pointing>
                        {formik.errors.maxSalary}
                      </Label>
                    )}
                  </div>
                  <div className="field">
                    <label>Open Position</label>
                    <Input
                      id="openPosition"
                      placeholder="1"
                      fluid
                      className="job--advert--lbl--inpt"
                      onChange={formik.handleChange}
                      value={formik.values.openPosition}
                    ></Input>
                    {formik.errors.openPosition && formik.touched.openPosition && (
                      <Label basic color="red" pointing>
                        {formik.errors.openPosition}
                      </Label>
                    )}
                  </div>
                  <div className="field">
                    <label>Application Deadline</label>
                    <Input
                      type="date"
                      id="applicationDeadline"
                      placeholder="dd.mm.yy"
                      fluid
                      className="job--advert--lbl--inpt"
                      onChange={formik.handleChange}
                      value={formik.values.applicationDeadline}
                    ></Input>
                    {formik.errors.applicationDeadline &&
                      formik.touched.applicationDeadline && (
                        <Label basic color="red" pointing>
                          {formik.errors.applicationDeadline}
                        </Label>
                      )}
                  </div>
                  <div className="field">
                    <label>Job Description</label>
                    <TextArea
                      id="jobDescription"
                      placeholder="describe.."
                      rows={8}
                      onChange={formik.handleChange}
                      value={formik.values.jobDescription}
                    ></TextArea>
                    {formik.errors.jobDescription &&
                      formik.touched.jobDescription && (
                        <Label basic color="red" pointing>
                          {formik.errors.jobDescription}
                        </Label>
                      )}
                  </div>
                </div>
                <div className="field" style={{ textAlign: "center" }}>
                  <Button type="submit" className="ui yellow large button">
                    Add
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
