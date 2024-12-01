import { useParams } from "react-router-dom"
import Departmentform from "./departmentform";

export default function EditDept(){
    const {id}:any=useParams();
    return(
        <div className="card">
            <div className="card-body">
                <h3>
                    add dept data

                </h3>
                <Departmentform model={{name:"Android"}} onsubmit={(values,{setSubmitting})=>{alert(String(id)); setSubmitting(false)}} />
            </div>
        </div>
    )
}