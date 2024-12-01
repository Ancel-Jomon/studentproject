import { Formik, FormikHelpers } from "formik"
import { studentcreationDTO } from "./studentdto.model"

import { Form, useNavigate } from "react-router-dom";
import TextFeild from "../forms/textfeild";
import Button from "../utilities/button";
import StudentForm from "./studentform";

export default function AddStudentDetail() {
    
    return (
        <div className="card">
            <div className="card-body">
              <StudentForm model={{name:"",dateofbirth:undefined}} onsubmit={(values,{setSubmitting})=>{setSubmitting(false)}}/>
            </div>
        </div>
    )
}

