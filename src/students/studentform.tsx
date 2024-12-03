import { studentcreationDTO } from "./studentdto.model";
import TextFeild from "../forms/textfeild";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

export default function StudentForm(props: studentformprops) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onsubmit}
      validationSchema={Yup.object({
        name: Yup.string().required("name cannot be blank"),
        dateofbirth: Yup.date().nullable().required("date required"),
      })}
    >
      {(formikprops) => (
        <Form>
          <TextFeild name="name" lablename="label" />
        </Form>
      )}
    </Formik>
  );
}
interface studentformprops {
  model: studentcreationDTO;
  onsubmit(
    values: studentcreationDTO,
    action: FormikHelpers<studentcreationDTO>
  ): void;
}
