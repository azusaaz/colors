import React from 'react';
import './Form.css';

const Form = () => {

    return (
      <div className="Form">
        <div className="form-content">
         <div className="form-field">
            <label>Email</label>
            <div>
              <input className="email" name= "email" placeholder="Enter email" />
              <div className="error-message" id="">Error message</div>
            </div>
         </div>
         <div className="form-field">
            <label>Phone number</label>
            <div>
              <input className="phone" name= "email" placeholder="Enter email" />
              <div className="error-message" id="">Error message</div>
            </div>
         </div>
         <div className="form-field">
            <label>Favorite Color</label>
            <div>
              <input className="favorite" name= "email" placeholder="Enter email" />
              <div className="error-message" id="">Error message</div>
            </div>
         </div>

         <div className="form-field" >
          <button  type="submit" id= "submit-btn">Submit</button>
          </div>
          </div>
      </div>
    );
  }


export default Form;