import { ErrorMessage, Field } from "formik";

export default function CheckboxField(props: checkboxFieldProps) {
  return (
    <div className="mb-3 form-check">
      <Field
        className="form-check-input"
        id={props.field}
        name={props.field}
        type="checkbox"
      />
      <label htmlFor={props.field}>{props.displayname}</label>
      <ErrorMessage name={props.field}>
        {(msg) => <div className="text-danger">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
interface checkboxFieldProps {
  field: string;
  displayname: string;
}
