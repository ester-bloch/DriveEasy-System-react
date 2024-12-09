export const InitialState = {

    students: [
        {
            name: "AAA", age: 12, family: { key: 'a', father: "Aa", mother: "aAaa" }
            , studies: { key: 'a', Grade: "Aa", class: "aAaa" }
            , key: "A"
        }
        , {
            name: "BBB", age: 12, family: { key: 'b', father: "Bb", mother: "Bbbb" },
            studies: { key: 'b', Grade: "Bb", class: "bBbb" }
            , key: "B"
        }
        , {
            name: "CCC", age: 12, family: { key: 'c', father: "Cc", mother: "Cccc" },
            studies: { key: 'c', Grade: "Cc", class: "cCcc" }
            , key: "C"
        }
        , {
            name: "DDD", age: 12, family: { key: 'd', father: "Dd", mother: "Dddd" },
            studies: { key: 'd', Grade: "Dd", class: "dDdd" }
            , key: "D"
        }
        //    , {name:"EEE", age:12 ,family:    {key:'e',father:"Ee",mother:"Eeee"},
        //studies:    { key: 'e', Grade: "Ee", class: "eEee" }}
        //    , {name:"FFF", age:12 ,family: { key: 'f', father: "Ff", mother: "Ffff" },studies:    { key: 'f', Grade: "Ff", class: "fFff" }}
    ],
    isManager: false,
    managerDetails:{name:"Esty"||"Esti", password:"123456"},
    currentStudent: {
        name: "AAA", age: 12, family: { key: 'a', father: "Aa", mother: "aAaa" }
        , studies: { key: 'a', Grade: "Aa", class: "aAaa" }
        , key: "A"
    }
    , families: [
        { key: 'f', father: "Ff", mother: "Ffff" },
        { key: 'd', father: "Dd", mother: "Dddd" },
        { key: 'c', father: "Cc", mother: "Cccc" },
        { key: 'e', father: "Ee", mother: "Eeee" },
        { key: 'b', father: "Bb", mother: "Bbbb" },
        { key: 'a', father: "Aa", mother: "aAaa" }

    ],
    studies:[
        { key: 'e', Grade: "Ee", class: "eEee" },
        { key: 'a', Grade: "Aa", class: "aAaa" },
        { key: 'b', Grade: "Bb", class: "bBbb" },
        { key: 'c', Grade: "Cc", class: "cCcc" },
        { key: 'd', Grade: "Dd", class: "dDdd" },
        { key: 'f', Grade: "Ff", class: "fFff" },

    ]
}
