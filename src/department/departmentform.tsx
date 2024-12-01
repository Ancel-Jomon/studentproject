import { Form, Formik, FormikHelpers } from "formik"
import TextFeild from "../forms/textfeild"
import Button from "../utilities/button"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { departmentcreationDTO } from "./departmentdto"

export default function departmentform(props: departmentformprops) {




    return (
        <Formik initialValues={props.model} onSubmit={props.onsubmit} validationSchema={Yup.object({ name: Yup.string().required("Dept name is required") })}>
            {(formikprops) => (<Form>
                <TextFeild name="name" lablename="Dept name" />
                <Button disabled={formikprops.isSubmitting} type="submit">submit</Button>
                <Link to="/department" className="btn btn-secondary"> cancel</Link>
            </Form>)}
        </Formik>
    )
}

interface departmentformprops {
    model: departmentcreationDTO
    onsubmit(values: departmentcreationDTO, action: FormikHelpers<departmentcreationDTO>): void
}