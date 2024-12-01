import { studentDTO } from "./students.model"
import css from "./students.module.css"

export default function Students(props: studentDTO){
    const buildlink = () => `/students/${props.id}`
     function click(){
        alert(buildlink())
    } 
    return(
        <div className={css.div}>
            <img src={props.photo} alt="photo" />
            <a href={buildlink()}>{props.name}</a>
            <button onClick={()=>click()}>click</button>
        </div>
    )
}