import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react'

export default function HrmsTextInput({...props}) {

    const [field,meta] = useField(props)
    return (
        <div>
            <FormField error={meta.touched&&!!meta.error}>
              <div className="equal width fields">
              <input {...field} {...props} />
              {
               meta.touched&&!!meta.error?(
                <Label pointing="left" basic color="red" content={meta.error}></Label>
               ):null
              }
              </div>
            
            </FormField>
        </div>
    )
}
