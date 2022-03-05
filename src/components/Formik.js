import { Field, Form, Formik } from "formik";

export function FormikS({ initialValues, render }) {
  return (
    <>
      <Formik initialValues={ initialValues }>
        { props => <Form>{ render( props ) }</Form> }
      </Formik>
    </>
  )
}

export function FieldS({ name, render }) {
  return (
    <>
      <Field name={ name }>
        {({ field, form }) => render( field, form )}
      </Field>
    </>
  );
}