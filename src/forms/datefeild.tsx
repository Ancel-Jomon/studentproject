import { useFormikContext } from "formik";

export default function DateField(props: dateFeildprops) {
  const { values, touched, errors, validateForm } = useFormikContext<any>();
  return (
    <div className="mb-3">
      <label htmlFor={props.field}>{props.displayname}</label>
      <input
        id={props.field}
        name={props.field}
        className="form-control"
        type="date"
        onChange={(e)=>{
            const date=new Date(e.currentTarget.value+"T00:00:00")
            values[props.field]=date;
            validateForm()
        }}
        defaultValue={values[props.field]?.toLocaleDateString("en-CA")
       
        }
      />
      {touched[props.field] && errors[props.field] ?(<div className="text-danger">{errors[props.field]?.toString()}</div>):null}
    </div>
  );
}
interface dateFeildprops {
  field: string;
  displayname: string;
}
