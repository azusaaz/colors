import React from 'react';
import './Form.css';

const Form = ({input, colors, setInput, setColors, setCurrentPage}) => {

    // handle form input and update state
    let handleChange = (event) => {
      var data = input;

      switch (event.target.name) {
        case 'email':
          document.getElementById("email-error").innerHTML="";
          data.email = event.target.value;
          break;
        case 'phone':
        document.getElementById("phone-error").innerHTML="";
          data.phone = event.target.value;
          break;
        case 'color':
        document.getElementById("color-error").innerHTML="";
          data.color = event.target.value;
          break;
        default:
      }
      setInput(data);
    }



    // validate email
    let emailValidation = (email) => {

      let message = document.getElementById("email-error");

      if (email === "") {
        message.innerHTML = "email is required"
        // return false;
      } else if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        message.innerHTML = "Invalid email address";
        // return false;
      } else {
        return true;
      }
    }

    // validate phone number
    let phoneValidation = (phone) => {

      let message = document.getElementById("phone-error");

      if (phone === "") {
        message.innerHTML = "phone number is required"
      }
      else if (!phone.match(/\+1\s([0-9]{3}\s){2}[0-9]{2}\s[0-9]{2}/)) {
        message.innerHTML = "Invalid phone number <br /> expecting +1 XXX XXX XX XX";
      } else {
        return true;
      }

    }

    // validate color name
    let colorValidation = (color) => {

      let message = document.getElementById("color-error");
      let colorList = Object.keys(colors);

      if (!color === "") {
        message.innerHTML = "favorite color is required";

      } else if (!color.match(/^[A-Z]+$/)) {
        message.innerHTML = "Colors must contain only <br /> uppercase alphabets";

      } else if (!colorList.includes(color)) {
        message.innerHTML = "Please choose from <br /> " + colorList.join(', ');

      } else {
        return true;
      }
    }

    // handle form input and update state
    let handleSubmit = (event) => {
      let data = input;

      let validation1 = emailValidation(data.email.trim());
      let validation2 = phoneValidation(data.phone.trim());
      let validation3 = colorValidation(data.color.trim());
       
      if (validation1 && validation2 && validation3) {

        // Count up
        let newColors = colors;
        newColors[data.color.trim()]++;

        // Save data to a local storage
        var setJson = JSON.stringify(newColors);
        localStorage.setItem('colorRecord', setJson);
    
        // Update state
        var record  = localStorage.getItem('colorRecord');
        setColors(JSON.parse(record));
        setCurrentPage('report');
      }
    }

    return (
      <div className="Form">
        <div className="form-content">
         <div className="form-field">
            <label>Email</label>
            <div>
              <input id="email" name= "email" placeholder="ex. example@aaa.com" onChange={handleChange} autoFocus/>
              <div className="error-message" id="email-error"></div>
            </div>
         </div>
         <div className="form-field">
            <label>Phone number</label>
            <div>
              <input id="phone" name= "phone" placeholder="ex. +1 XXX XXX XX XX" onChange={handleChange} />
              <div className="error-message" id="phone-error"></div>
            </div>
         </div>
         <div className="form-field">
            <label>Favorite Color</label>
            <div>
              <input id="favorite" name= "color" placeholder="ex. BLACK" onChange={handleChange} />
              <div className="error-message" id="color-error"></div>
            </div>
         </div>

         <div className="form-field" >
          <button  type="submit" id= "submit-btn" onClick={handleSubmit} >Submit</button>
          </div>
          </div>
      </div>
    );
  }


export default Form;