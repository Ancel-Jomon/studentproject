import { useNavigate } from "react-router-dom";
import Button from "../utilities/button";

export default function DepartmentIndex() {
    const navigate=useNavigate()
    return (<>
        <div className="card ">
            <div className="card-body">
                <h1>add dept</h1>
                <Button className="btn btn-primary" onclick={()=>{
                    
                    navigate("/department/adddept")
                }}>add</Button>
            </div>
        </div>
        </>)
}