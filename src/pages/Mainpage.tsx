import { useEffect, useState } from "react"
import { mainpageDTO } from "./students.model"
import StudentsList from "./studentsslist"

export default function(){
    const [students, setstudents] = useState<mainpageDTO>({})
  useEffect(() => {
    const timer = setTimeout(() => {
      setstudents({
        listofstudents: [{
          id: 1,
          name: "name1",
          photo: "https://media.istockphoto.com/id/1401770465/photo/cost-reduction-concept.jpg?s=612x612&w=0&k=20&c=48S3i-Jcz2kbeiFnqhohYfgdSSGhwb2ej69cdzC33WM="

        }, { id: 2, photo: "https://media.istockphoto.com/id/1325983726/vector/mockup-incoming-call-voicemail-screen-smartphone-interface-vector-template-flat-ui-ux-for.jpg?s=612x612&w=0&k=20&c=HhVwcTat2FsfP2IUwQzp9vzGcWi30KJ-38hGxe6igLg=", name: "name2" }]
        , anotherlist: [{ id: 1, name: "newname", photo: "https://deep-image.ai/blog/content/images/2022/08/magic-g1db898374_1920.jpg" }]
      })
    }, 10)
  })
  return( <div className='card'>

    <div className='card-body'>
      <h1>first list</h1>
      <StudentsList students={students.listofstudents} />
      <h1>second list</h1>
      <StudentsList students={students.anotherlist} />

    </div>
  </div>)
}