import GenericList from "../utilities/genericlist"
import Students from "./students"
import { studentDTO } from "./students.model"
import css from "./studentslist.module.css"

export default function StudentsList(props: StudentsDTOList){
   
    return(
     <GenericList list={props.students}>
        <div className={css.div}>{
            props.students?.map((student)=>(<Students {...student} key={student.id}/>))
        }</div>
     </GenericList>
    )
}
interface StudentsDTOList{
    students?:studentDTO[]
}