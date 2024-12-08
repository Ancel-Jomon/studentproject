import { Formik, FormikHelpers } from "formik";
import { studentcreationDTO } from "./studentdto.model";

import { Form, useNavigate } from "react-router-dom";
import TextFeild from "../forms/textfeild";
import Button from "../utilities/button";
import StudentForm from "./studentform";
import { departmentDTO } from "../department/departmentdto";

export default function AddStudentDetail() {
  const selecteddepartment:departmentDTO[]=[{name:"android",id:1},{name:"web",id:2}]
  const unselecteddepartment:departmentDTO[]=[]
  return (
    <div className="card">
      <div className="card-body">
        <StudentForm
          model={{ name: "", dateofbirth: undefined }}
          onsubmit={(values, { setSubmitting }) => {
            setSubmitting(false);

            alert(JSON.stringify(values))
          }} selected={unselecteddepartment} unselected={selecteddepartment}
        />
      </div>
    </div>
  );
}
