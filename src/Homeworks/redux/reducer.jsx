import { produce } from 'immer';
import { InitialState } from './State';

export const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_STUDENT': {
            let s = state.students.find(x => x.name == action.payload)
           console.log(`s= ${s}`)
            state.currentStudent = s
            console.log(`state.currentStudent.name= ${state.currentStudent.name}`)
            break
        }
        case 'SET_IS_MANAGER': {
            console.log("SET_IS_MANAGER נכנסתי ל")
            state.isManager = action.payload
            break
        }
        
        case "REMOVE_STUDENT": {
            /*let index = state.products.findIndex(p => p.id == action.payload);
            state.products.splice(index, 1)*/
            let index = state.students.findIndex(x => x.name == action.payload.name)
            state.students.splice(index,1)
            break
        }
        case "CHANGE_AGE": {
            console.log(`CHANGE_AGE נכנסתי ל age= ${action.payload}`)
            state.currentStudent.age = action.payload
            console.log(`עבד 1`)
            const thisStudentIndex = state.students.findIndex(s => s.name == state.currentStudent.name)
            console.log(`עבד 2`)
            state.students.splice(thisStudentIndex,1)
            state.students.push(state.currentStudent)
            // state.={...thisStudent,age:state.currentStudent.age}
            console.log(`CHANGE_AGE נכנסתי ל state.currentStudent.age= ${state.currentStudent.age},and ${state.students.find(d => d == state.currentStudent).age}`)
        break
        }
        case 'ADD_STUDENT':{
            const newStudent={
                name:action.payload.name
                ,age:action.payload.age
                ,family:state.families[action.payload.family]
                ,studies:state.studies[action.payload.studies]
            }
            console.log(" ADD_STUDENTנכנכסתי ל"+"payload= "+action.payload)
            state.students.push(newStudent)
            break
        }
    }
}, InitialState)
