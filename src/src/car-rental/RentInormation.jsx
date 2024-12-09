import React, { useState } from "react";
import { useSelector } from "react-redux";
import './RentInformation.css';

export const RentInformation = () => {
  const rents = useSelector(state => state.Rents);
  const store = useSelector(store => store);
  const [flag,setFlag]=useState(false);
  // State for search filters
  const [carCode, setCarCode] = useState();
  const [userName, setUserName] = useState();

  const getUser = (codeType) => {
    const user = store.users.find(type => type.code == codeType);
    return user;
  };

  const checkreturns = (coderent) => {
    let returnscode = store.Returns.find(x => x.rentCode == coderent);
    return returnscode;
  };


  const filterRents = rents.filter(rent => {
    const matchesCarCode = carCode ? rent.CarCode == carCode : true;
    const user = getUser(rent.userCode);
    const matchesUserName = userName ? user.userName == userName : true;
    return matchesCarCode && matchesUserName;
  });
  debugger
  return (
    <div className="table">
      <div className="search-filters">
        <input  className="for"  type="text"   placeholder="חפש לפי קוד רכב"   value={carCode}  onChange={(e) => setCarCode(e.target.value)}   />
        <input className="for"
          type="text" 
          placeholder="חפש לפי שם משתמש"
          value={userName}  onChange={(e) => setUserName(e.target.value)} 
        />
        <button className="for" onClick={()=>setFlag(!flag)}>{!flag?'הצגת תאריך חזרה':'הסרת תאריך החזרה'}</button>
      </div>
      <table className="rent-table">
        <thead>
          <tr>
            <th>קוד השאלה</th>
            <th>משתמש</th>
            <th>קוד רכב</th>
            <th>תאריך השאלה</th>
            <th>שעת השאלה</th>
            <th>האם הוחזר</th>
            {flag&&<th>תאריך החזרה</th>}
          </tr>
        </thead>
        <tbody>
      
          {filterRents.map(rent => (
            <tr key={rent.rentCode}>
              <td>{rent.rentCode}</td>
              <td>{getUser(rent.userCode).userName}</td>
              <td>{rent.CarCode}</td>
              <td>{new Date(rent.rentDate).toLocaleDateString()}</td>
              <td>{rent.rentHour}:00</td>
              <td>{checkreturns(rent.rentCode) ? 'הרכב הוחזר' : 'הרכב מושאל'}</td>
             {flag&&<td>{store.Returns.find(x=>x.rentCode==rent.rentCode)?.ReturnDate.toLocaleDateString()}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RentInformation;