import React from "react";
import { Input, Segment,Button,Icon } from "semantic-ui-react";
import { Form, Formik } from "formik";

export default function ToolBar() {
  return (
    <div >
      <Segment >
      <Formik>
        <Form className="ui form">
          <div className="equal width fields">
            <div className="field">
            <Input icon="search" iconPosition="left" placeholder="Job Titles" />
            </div>
            <div className="field">
            <Input icon="search" iconPosition="left" placeholder="Location" />
            </div>
            <Button icon labelPosition='left' color='orange'>   <Icon name='search' />Search</Button>
          </div>
           
          
        </Form>
      </Formik>
      </Segment>
      
    </div>
  );
}
