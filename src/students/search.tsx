import { Field, Form, Formik } from "formik";
import GenericList from "../utilities/genericlist";
import { departmentDTO } from "../department/departmentdto";
import Button from "../utilities/button";

export default function SearchStudent() {
    const Initialvalues:searchStudentForm = {
        name: '',
        deptid: 0,
        topperlist: false,
        activelist: false
    }
    const depts: departmentDTO[] = [{ name: "Android", id: 1 }, { name: "windows", id: 2 }]
    return (<>
        <div className="card">
            <div className="card-body">
                <h3>search</h3>
                <Formik initialValues={Initialvalues} onSubmit={(values) => {alert(JSON.stringify(values)) }}>
                    {(formikprops) => (<Form>
                        <div className="row gx-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="name">name</label>
                                <input type="text" className="form-control" id="name" placeholder="student name" {...formikprops.getFieldProps("name")} />
                            </div>
                            <div className="col-auto">
                                <label htmlFor="selectdept">select dept</label>
                                <select className="form-select" id="selectdept" {...formikprops.getFieldProps("deptid")}>
                                    <option value="0">select dept</option>
                                    {depts.map((dept) => (<option key={dept.id} value={dept.id}>{dept.name}</option>))}
                                </select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="activelist">students list</label>
                                    <Field type="checkbox" id="activelist" name="activelist" className="form-check-input"></Field>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="topperlist">topper list</label>
                                    <Field type="checkbox" id="topperlist" name="topperlist" className="form-check-input"></Field>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Button onclick={() => { formikprops.submitForm() }}>search</Button>
                                <Button className="btn btn-danger ms-3" onclick={() => { formikprops.setValues(Initialvalues) }}>clear</Button>
                            </div>
                        </div>
                    </Form>)}

                </Formik>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <GenericList list={[]}>
                    <div></div>
                </GenericList>
            </div>
        </div>

    </>
    )
}

interface searchStudentForm{
    name: string,
    deptid: number,
    topperlist: boolean,
    activelist: boolean
}