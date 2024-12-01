import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Button from "../utilities/button";
import * as Yup from "yup"
import { Link } from "react-router-dom";
import TextFeild from "../forms/textfeild";
import Departmentform from "./departmentform";

export default function AddDept() {
   
    return (
        <div className="card">
            <div className="card-body">
                <h3>
                    add dept data

                </h3>
                <Departmentform model={{name:""}} onsubmit={(values,{setSubmitting})=>{alert(JSON.stringify(values)); setSubmitting(false)}} />
            </div>
        </div>
    )
}