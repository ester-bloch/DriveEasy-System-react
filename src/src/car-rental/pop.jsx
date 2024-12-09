import React, { useState } from 'react';
import Input from './input';
import { Test } from './Test';
import './pop.css';
import { AddModel } from './addModel';

export const PopUp = (props) => {
  debugger
  let { thisUser } = props;
  const [isOpen, setIsOpen] = useState(thisUser ? false : true);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };
  debugger
  return (
    <div id='popUp'>
      {/* {thisUser.thisUser&&thisUser.thisUser.codeTypeUser == '1'&&  */}
      <div className="button">
        <button onClick={handleButtonClick}>
          {thisUser && <img src='/pics/plus.png' id='plus' onClick={handleButtonClick}></img>}
        </button>
      </div>
      {/* } */}
      <div className={`pop-up ${isOpen ? 'open' : ''}`}>
        <div className="content">
          <div className="container">
            <span className="close" onClick={handleCloseClick}>
              ❌
            </span>
            {thisUser ? <Input setFlag={setIsOpen} flag={isOpen}></Input> : <AddModel setFlag={setIsOpen} flag={isOpen}></AddModel>}
            <div className="subscribe">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;