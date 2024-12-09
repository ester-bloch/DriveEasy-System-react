import { useDispatch, useSelector } from "react-redux"
import { store } from "../redux/store"
import { Outlet, useNavigate } from "react-router"
import { Button } from "react-bootstrap"
import { useRef, useState } from "react"
import { addStudent, changeAgeAction } from "../redux/action"

export const Students2 = () => {
       const navigate = useNavigate()
       const [show, setShow] = useState(false)
       let thisStudent = useSelector(store => store.currentStudent)
       let familyDetails = useSelector(s => s.families)
       let studiesDetails = useSelector(s => s.studies)
       let isManager = useSelector(store => store.isManager)
       const ageRef = useRef()
       const addStudentref=useRef()
       const NameRefToAdd = useRef()
       const ageRefToAdd = useRef()
       const familyRefToAdd = useRef()
       const studiesRefToAdd = useRef()
       const dispatch1 = useDispatch()

       function ChangeAge() {
              console.log("changeAgeנכנסתי ל")
              console.log(`age= ${thisStudent.age}`)
              dispatch1(changeAgeAction(ageRef.current.value))
              console.log(`new age= ${thisStudent.age}`)
              setShow(false)
              console.log(`${thisStudent}`)
       }
       function addStudent1() {
              console.log("1 addStudent נכנסתי ל")
              console.log(`familyDetails[1].father= ${familyDetails[1].father}`)
              console.log(`familyDetails.length= ${familyDetails.length}`)
              console.log(`studiesDetails.length= ${studiesDetails.length}`)
              console.log(`familyDetails[1]= ${familyDetails[1]}`)
              console.log(`studiesDetails[1]= ${studiesDetails[1]}`)
              let newStudent = {
                     name: NameRefToAdd.current.value,
                     age: parseInt(ageRefToAdd.current.value),
                     family:{key: 'f', father: "Ff", mother: "Ffff"},
                     studies: { key: 'e'
                            , Grade: "Ee", class: "eEee"},

              }
               console.log(`newStudent: ${newStudent} name:${newStudent.name}`)
              dispatch1(addStudent(newStudent))
              setShow(false)
       }
       const showStudent3 = () => {
              navigate(`StudyDetails`)
       }
       function optionChangeAge() {
              return <div><input id="changaAge" ref={ageRef} placeholder={`${thisStudent.age}שנה גיל לתלמיד נוכחי. גילו כעת`}
                     onBlur={() => { ChangeAge() }}></input>
              </div>
       }
       /*      {key:'f',father:"Ff",mother:"Ffff"}
         {key:'f' ,Grade:"Aa",class:"aAaa"},
         {name:"AAA", age:12 ,family:familyDetails[0],studies:studiesDetails[0],key:"A"}*/

       function optionAddStudent() {
              return <div>
                     <br></br>
                     <label htmlFor="nameToAdd">ערוך פרטי תלמיד חדש</label>
                     <br></br>
                     <input ref={NameRefToAdd} placeholder={`name`}></input>
                     <input id="AgeToAdd" ref={ageRefToAdd} placeholder={`age`}></input>
                     <input ref={familyRefToAdd} placeholder={`family, insert number`}></input>
                     <input ref={studiesRefToAdd} placeholder={`studies, insert number`}></input>
                     <div>
                            <label htmlFor="addStudent">להוספה</label>
                            <br></br>
                            <button ref ={ addStudentref }id={"addStudentB"} onClick={f}>add</button>
                     </div>
              </div>
       }
function f(){
       console.log("נכנסתי לf")
       {NameRefToAdd.current.value!=null&&NameRefToAdd.current.value!=undefined &&addStudent1()}
}
       return <>{thisStudent &&
              <div>
                     <h5>name: {thisStudent.name} age: {thisStudent.age}</h5>
                     <h5 >father: {thisStudent.family.father} mother: {thisStudent.family.mother}</h5>
                     <button onClick={() => { showStudent3() }}>פרטי לימודים</button>
                     {isManager && <button id="Hebrew" onClick={() => { setShow(show==true?false:true) }}>שינוי פרטים </button>}
                     {show && optionChangeAge()}
                     {show && optionAddStudent()}
                     {show && console.log(studiesRefToAdd)}

                   
                     <Outlet></Outlet>
              </div>
       } </>
}