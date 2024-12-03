import StudentForm from "./studentform";

export default function EditStudentDetail() {
  return (
    <div className="card">
      <div className="card-body">
        <StudentForm
          model={{ name: "name", dateofbirth: new Date("01-01-2005") }}
          onsubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        />
      </div>
    </div>
  );
}
