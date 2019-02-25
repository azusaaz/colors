import React from 'react';
import './Header.css';

const Header = ({currentPage, setCurrentPage}) => {
  
    // Toggle form page and report page
    let onClick=(e)=>{
      setCurrentPage(e.target.getAttribute("data-name"));
    }
    
    // For tab styling change
    var record  = localStorage.getItem('colorRecord');
    let bold= {fontWeight:'bold'};
    let disable = {pointerEvents: 'none', opacity: 0.5};

    return (
      <div className="Header">

        <div className="tabs">

         <div className="tab" id="tab-form" data-name="form" onClick={onClick} 
         style={currentPage==='form' ? bold : null}>Form</div>

         <div className="tab" id="tab-report" data-name="report" onClick={onClick} 
         style={!record ? disable : currentPage === 'report' ? bold : null}>Report</div>

        </div>

        <div id="navRight">
          <img id="dia" src="dia.png" alt=""/>
          <div id="siteName">colors</div>
        </div>
      </div>
    );
  }


export default Header;