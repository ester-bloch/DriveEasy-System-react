import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import './CreditCard.css'
import swal from "sweetalert";
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth();
let MONTHS = {},
  YEARS = [CURRENT_YEAR];

for (let i = 1; i <= 12; i++) {
  MONTHS[i] = i.toString().length === 1 ? `0${i}` : i.toString();
  YEARS.push(YEARS[0] + i);
}

export const CreditCard = (props) => {
  const {save}=props;
  // const {setFlag,flag}=props;
  const [sliderLocation, setSliderLocation] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardMonth, setCardMonth] = useState(0);
  const [cardYear, setCardYear] = useState(0);
  const [cardCvv, setCardCvv] = useState("");
  const [cardType, setCardType] = useState("visa");
  const [toggleMonth, setToggleMonth] = useState(true);
  const [toggleYear, setToggleYear] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);

  const numberCardRef = useRef(null);
  const nameCardRef = useRef(null);
  const expirationCardRef = useRef(null);
  const numberInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const cvvInputRef = useRef(null);

  const handleChange = (event, type) => {
    let { value } = event.target;

    if (type === "cardNumber") {
      value = value.replace(/ /gi, "");
      if (isNaN(value)) {
        return;
      } else {
        const cardType = getCardType(value);
        setCardNumber(value);
        setCardType(cardType);
      }
    } else if (type === "cardName") {
      const regName = /^[a-zA-Z\s]*$/;
      if (regName.test(value)) {
        setCardName(value);
      }
    } else if (type === "cardMonth") {
      value = Number(value);
      setCardMonth(value);
      setToggleMonth((prev) => !prev);
    } else if (type === "cardYear") {
      value = Number(value);
      if (value === CURRENT_YEAR && cardMonth <= CURRENT_MONTH) {
        setCardMonth(0);
        setCardYear(value);
        setToggleYear((prev) => !prev);
        setToggleMonth((prev) => !prev);
      } else {
        setCardYear(value);
        setToggleYear((prev) => !prev);
      }
    } else if (type === "cardCvv") {
      value = value.replace(/ /gi, "");
      if (!isNaN(value)) {
        setCardCvv(value);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const canSubmit = () => {
    if (
      cardNumber.length === 16 &&
      cardName.length > 4 &&
      cardCvv.length === 3 &&
      cardMonth !== 0 &&
      cardYear !== 0
    )
    save();
    else
    swal('oops!','נא מלא את כל השדות','error');
    ;
  };

  const moveSlider = (event, position) => {
    position = ["year", "month"].includes(position) ? "expiration" : position;
    setSliderLocation(position);
  };

  const setFocus = (event, type) => {
    if (event.target.className.includes("year")) {
      event.stopPropagation();
    }
    if (type === "number") {
      numberInputRef.current.focus();
    } else if (type === "name") {
      nameInputRef.current.focus();
    } else if (type === "month") {
      monthInputRef.current.focus();
    } else if (type === "year") {
      yearInputRef.current.focus();
    }
  };

  const handleClick = (event) => {
    if (!cvvInputRef.current.contains(event.target)) {
      setCardFlipped(false);
    }
    if (
      nameCardRef.current.contains(event.target) ||
      nameInputRef.current.contains(event.target) ||
      numberCardRef.current.contains(event.target) ||
      numberInputRef.current.contains(event.target) ||
      expirationCardRef.current.contains(event.target) ||
      monthInputRef.current.contains(event.target) ||
      yearInputRef.current.contains(event.target)
    )
      return;
    setSliderLocation("");
  };

  const formatCardNumber = (value) => {
    let v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const getCardType = (number) => {
    let re = new RegExp("^4");
    if (number.match(re) != null) return "visa";
    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return "amex";
    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return "mastercard";
    re = new RegExp("^6011");
    if (number.match(re) != null) return "discover";
    return "visa";
  };

  let displayNumber = [];
  for (let i = 0; i < 16; i++) {
    let displayDigit="#";
    if (typeof cardNumber[i] !== "undefined") {
      displayDigit = i > 3 && i < 12 ? "*" : cardNumber[i];
    }
    displayNumber.push(displayDigit);
  }

  // const canSubmitFlag = !canSubmit();

  return (
    <div className="card-form" onClick={handleClick}>
      <div className={`card container ${showCard ? "show" : ""}`}>
        <div className={`card inner ${cardFlipped ? "flipped" : ""}`}>
          <div className="front">
            <img
              className="card cover"
              src="/pics/21.jpeg"
              onLoad={() => setShowCard(true)}
              alt="Card Cover"
            />
            <div className="card overlay" />
            <div
              className={`card slider ${
                sliderLocation.length > 0 ? `on-${sliderLocation}` : ""
              }`}
            />
            <div className="card content">
              <img className="chip" src="/pics/chip.png" alt="Chip"/>
              <div className={`type ${cardType}`} />
              <div
                className="number"
                onClick={(event) => setFocus(event, "number")}
                ref={numberCardRef}
              >
                {displayNumber.map((digit, index) => (
                  <div className="digit-wrapper" key={index}>
                    <div
                      className={digit === "#" ? "digit shown" : "digit hidden"}
                    >
                      
                    </div>
                    <div
                      className={digit === "#" ? "digit hidden" : "digit shown"}
                    >
                      {digit === "#" ? "" : digit}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="name"
                onClick={(event) => setFocus(event, "name")}
                ref={nameCardRef}
              >
                <label htmlFor="name">Card Holder</label>
                <div id="name">
                  <div className={`placeholder ${cardName.length > 0 ? "hidden" : "shown"}`}>
                    FULL NAME
                  </div>
                  <div className="name-container">
                    {cardName.split("").map((char, index) => (
                      <div
                        className={`character ${/\s/.test(char) ? "space" : ""}`}
                        key={index}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="expiration"
                onClick={(event) => setFocus(event, "month")}
                ref={expirationCardRef}
              >
                <label htmlFor="expiration">Expires</label>
                <div id="expiration">
                  <div className={`double-digit ${toggleMonth ? "toggle1" : "toggle2"}`}>
                    {cardMonth === 0 ? "MM" : `${cardMonth + 100}`.slice(-2)}
                  </div>
                  <div className="double-digit">/</div>
                  <div
                    className={`year double-digit ${toggleYear ? "toggle1" : "toggle2"}`}
                    onClick={(event) => setFocus(event, "year")}
                  >
                    {cardYear === 0 ? "YY" : `${cardYear}`.slice(-2)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card cover back">
            <p>CVV</p>
          </div>
        </div>
      </div>
      <div className="card-inputs">
        <form onSubmit={handleSubmit}>
          <div className="lg-input">
            <label htmlFor="cardNumber"> Card Number</label>
            <input
              className="number-input"
              id="cardNumber"
              type="text"
              onChange={(event) => handleChange(event, "cardNumber")}
              onSelect={(event) => moveSlider(event, "number")}
              value={formatCardNumber(cardNumber)}
              ref={numberInputRef}
              maxLength="19"
            />
          </div>
          <div className="lg-input">
            <label htmlFor="cardName">Card Holder's Name</label>
            <input
              className="name-input"
              id="cardName"
              type="text"
              onChange={(event) => handleChange(event, "cardName")}
              onSelect={(event) => moveSlider(event, "name")}
              ref={nameInputRef}
              value={cardName}
              maxLength="24"
            />
          </div>
          <div className="med-input">
            <label htmlFor="cardMonth">Expiration Date</label>
            <select
              className="month-input"
              id="cardMonth"
              value={cardMonth}
              onChange={(event) => handleChange(event, "cardMonth")}
              onFocus={(event) => moveSlider(event, "month")}
              ref={monthInputRef}
            >
              <option value="0" disabled>
                Month
              </option>
              {Object.keys(MONTHS).map((monthKey) => (
                <option
                  key={monthKey}
                  value={monthKey}
                  disabled={
                    cardYear === CURRENT_YEAR && Number(monthKey) <= CURRENT_MONTH
                  }
                >
                  {MONTHS[monthKey]}
                </option>
              ))}
            </select>
            <select
              className="year-input"
              id="cardYear"
              value={cardYear}
              onChange={(event) => handleChange(event, "cardYear")}
              onFocus={(event) => moveSlider(event, "year")}
              ref={yearInputRef}
            >
              <option value="0" disabled>
                Year
              </option>
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="sm-input">
            <label htmlFor="cardCvv">CVV</label>
            <input
              className="cvv-input"
              id="cardCvv"
              value={cardCvv}
              onChange={(event) => handleChange(event, "cardCvv")}
              onSelect={() => setCardFlipped(true)}
              ref={cvvInputRef}
              maxLength="3"
            />
          </div>
          <button 
            className={`lg-input`} onClick={canSubmit}
            // disabled={canSubmitFlag}

          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
