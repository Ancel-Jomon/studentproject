import { ErrorMessage, Field } from "formik";

export default function TextFeild(props:TextFeildProps){
    return(
        <div className="mb-3">
                       <label htmlFor={props.name}>{props.lablename}</label>
                        <Field name={props.name} className="form-control"></Field>
                        <ErrorMessage name={props.name}>{(msg=><div className="text-danger">{msg}</div>)}</ErrorMessage>
                       </div>
    )
}

interface TextFeildProps{
    name:string
    lablename:string
}