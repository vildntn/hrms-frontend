import React from "react";
import { Form, Formik } from "formik";
import { Button, Header, Segment } from "semantic-ui-react";
import * as Yup from "yup";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";

export default function SignUp() {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };
  const shema = Yup.object({
    email: Yup.string().email().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    password: Yup.string().required(),
  });

  return (
    <div>
      <div className="ui placeholder segment">
        <Formik
          initialValues={initialValues}
          validationSchema={shema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="ui form">
            <div className="ui header">
              <Header>Create Account</Header>
            </div>
            <Segment>
            <label>First Name</label>
            <HrmsTextInput
              name="firstName"
              placeholder="First Name"
            ></HrmsTextInput>
            <label>Last Name</label>
            <HrmsTextInput
              name="lastName"
              placeholder="Last Name"
            ></HrmsTextInput>
            <label>Email</label>
            <HrmsTextInput
              name="email"
              placeholder="email@email.com"
            ></HrmsTextInput>
            <label>Password</label>
            <HrmsTextInput
              name="password"
              placeholder="Password"
            ></HrmsTextInput>
            <Button className="ui orange fluid button" color="black">
              Register
            </Button>
            </Segment>
           
          </Form>
        </Formik>
      </div>
    </div>
  );
}
