import { studentcreationDTO } from "./studentdto.model";
import TextFeild from "../forms/textfeild";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import DateField from "../forms/datefeild";
import ImageField from "../forms/imagefield";
import MarkDownField from "../forms/markdownfield";
import Button from "../utilities/button";
import { Link } from "react-router-dom";
import CheckboxField from "../forms/checkboxfield";
import MultipleSelectorField, {
  multipleSelectormodel,
} from "../forms/MultipleSelector";
import { departmentDTO } from "../department/departmentdto";
import { useState } from "react";

export default function StudentForm(props: studentformprops) {
  const [selecteddepartment, setselectedDepartment] = useState(
    maptoModel(props.selected)
  );
  const [unselecteddepartment, setunselectedDepartment] = useState(
    maptoModel(props.unselected)
  );
  function maptoModel(
    items: { id: number; name: string }[]
  ): multipleSelectormodel[] {
    return items.map((item) => {
      return { key: item.id, value: item.name };
    });
  }
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
          <TextFeild name="name" lablename="name label" />
          <DateField displayname="dateofbirth field" field="dateofbirth" />
          <CheckboxField field="isActive" displayname="isActive" />
          <ImageField
            displayname="image field"
            imageURL={props.model.photourl}
            field="image"
          />
          <MarkDownField field="markdownfield" displayname="info" />
          <MultipleSelectorField
            displayname="department"
            selected={selecteddepartment}
            unselected={unselecteddepartment}
            onChange={(selecteddepartment, unselecteddepartment) => {
              setselectedDepartment(selecteddepartment);
              setunselectedDepartment(unselecteddepartment)
            }}
          />
          <Button
            type="submit"
            className="btn btn-primary"
            disabled={formikprops.isSubmitting}
          >
            submit
          </Button>
          <Link to="/student/add" className="btn btn-secondary ms-3">
            cancel
          </Link>
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
  selected: departmentDTO[];
  unselected: departmentDTO[];
}
