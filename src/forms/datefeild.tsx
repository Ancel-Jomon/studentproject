import { useFormikContext } from "formik";

export default function DateFeild(props: dateFeildprops) {
  const { values, touched, errors, validateForm } = useFormikContext<any>();
  return (
    <div className="mb-3">
      <label htmlFor={props.feild}>{props.displayname}</label>
      <input
        id={props.feild}
        name={props.feild}
        className="form-control"
        type="date"
        onChange={(e)=>{
            const date=new Date(e.currentTarget.value+"T00:00:00")
            values[props.feild]=date;
            validateForm()
        }}
        defaultValue={values[props.feild]?.toLocaleDateString("en-CA")
       
        }
      />
      {touched[props.feild] && errors[props.feild] ?(<div className="text-danger">{errors[props.feild]?.toString()}</div>):null}
    </div>
  );
}
interface dateFeildprops {
  feild: string;
  displayname: string;
}
