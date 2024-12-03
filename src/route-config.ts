import path from "path";
import DepartmentIndex from "./department/department";
import Mainpage from "./pages/Mainpage";
import SearchStudent from "./students/search";
import AddStudent from "./students/addstudent";
import AddStudentDetail from "./students/adddetail";
import AddDept from "./department/adddept";
import EditDept from "./department/editdept";
import redirect from "./utilities/redirect";
import RedirectMain from "./utilities/redirect";
import EditStudentDetail from "./students/editstudent";

const routes = [
  { path: "/department", component: DepartmentIndex },
  { path: "/", component: Mainpage, exact: true },
  { path: "/search", component: SearchStudent },
  { path: "/student/add", component: AddStudent },
  { path: "/student/adddetail", component: AddStudentDetail },
  { path: "/department/adddept", component: AddDept },
  { path: "/department/editdept/:id", component: EditDept },
  { path: "/student/edit/:id", component: EditStudentDetail },
  { path: "*", component: RedirectMain },
];
export default routes;
