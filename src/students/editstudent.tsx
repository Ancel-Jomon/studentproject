import { departmentDTO } from "../department/departmentdto";
import StudentForm from "./studentform";

export default function EditStudentDetail() {
  const selecteddepartment:departmentDTO[]=[{name:"web",id:2}]
  const unselecteddepartment:departmentDTO[]=[{name:"android",id:1},]
  return (
    <div className="card">
      <div className="card-body">
        <StudentForm
          model={{ name: "someone", dateofbirth: new Date("01-01-2005") }}
          onsubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }} selected={selecteddepartment} unselected={unselecteddepartment}
        />
      </div>
    </div>
  );
}
