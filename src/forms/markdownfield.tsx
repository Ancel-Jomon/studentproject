import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import "./markdownfield.css"

export default function MarkDownField(props: MarkDownFieldProps) {
  const { values } = useFormikContext<any>();
  return (
    <div className="mb-3 form-markdown">
      <div>
        <label htmlFor={props.field}>{props.displayname}</label>
        <div>
          <Field name={props.field}
            id={props.field}
            as="textarea"
            className="form-textarea"
          />
        </div>
      </div>
      <div>
        <label htmlFor={props.field}>{props.displayname}</label>
        <div className="markdown-container">
          <ReactMarkdown>{values[props.field]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

interface MarkDownFieldProps {
  field: string;
  displayname: string;
}
