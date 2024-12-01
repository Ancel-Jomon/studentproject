import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Button from "../utilities/button";

export default function AddStudent(){
    const navigate=useNavigate()
    return(
        <div className="card">
            <div className="card-body">
                <h3>add students</h3>
               <Button onclick={()=>{
                navigate("/adddetail")
               }}>add</Button>
            </div>
        </div>
    )
}