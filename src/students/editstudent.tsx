import StudentForm from "./studentform"

export default function EditStudentDetail() {
    
    return (
        <div className="card">
            <div className="card-body">
              <StudentForm model={{name:"name",dateofbirth:undefined}} onsubmit={(values,{setSubmitting})=>{setSubmitting(false)}}/>
            </div>
        </div>
    )
}
