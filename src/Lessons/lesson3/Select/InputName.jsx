export const Inputname = (props) => {

    const { setName } = props

    // const set = (event) => {
    //     console.log(event);
    //     // event - אובייקט שמכיל את האירוע
    //     // .target - האלמנט שהפעיל את האירוע
    //     // .value - גישה למאפיין של האלמנט
    //     setName(event.target.value)
    // }

    return <>
        {/* input - username */}
        <h4>Input Your Name:</h4>
        {/* react - לכל אלמנט תגית פותחת וסוגרת */}
        {/* אם פונקציה אנונימית מקבלת משתנה - המערכת תכניס את האובייקט שמכיל נתונים על האירוע */}
        {/* <input placeholder="input name" onBlur={(event) => set(event)}></input> */}
        <input placeholder="input name" onBlur={(e) => setName(e.target.value)}></input>
    </>
}