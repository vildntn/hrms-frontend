import React,{useState} from "react";
import { Form, Formik } from "formik";
import {
  Button,
  Header,
  Segment,
  Grid,
  Image,
  Message,
  FormInput,
} from "semantic-ui-react";
import * as Yup from "yup";
// import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";

export default function SignUp() {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({
  email: "",
  firstName: "",
  lastName: "",
  password: "",})
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

  const handleSubmit = (e) => {
     e.preventDefault();
     const newPerson={...person,id:new Date().getTime().toString()}
     setPeople([...people,newPerson])
     console.log(newPerson)

  };

const handleChange=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
 setPerson({...person,[name]:value})
}



  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <div className="column" style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Log-in to your account
          </Header>
          <Formik  initialValues={person}>
            <Form size="large"  className="ui form">
              <Segment stacked>
                <FormInput
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                 
                  onChange={handleChange}
                />
                <FormInput
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="First Name"
                  name="firstName"
                  value={person.firstName}
                  onChange={handleChange}
                />
                <FormInput
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Last Name"
                  name="lastName"
                  value={person.lastName}
                  onChange={handleChange}
                />

                <FormInput
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={person.password}
                  onChange={handleChange}
                />

                <Button color="teal" fluid size="large" type="submit" onClick={handleSubmit}>
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Formik>

          <Message>
            Already Have An Account? <a href="#">Login</a>
          </Message>
        </div>
      </Grid>
      
    </>
  );
}
