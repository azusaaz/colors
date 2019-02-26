import React from 'react';
//import shortid from 'shortid';
import './Report.css';

const Report = ({colors}) => {
  
   // generate report from a passed object
   let report=[];
   for(let color in colors){
      report.push(
      <div className="report-line" key={color}>
        <span className="diamond" style={{backgroundColor: color}} key={color}></span>
        <span key={color+1}>{color}</span>
        <span key={color+-1}>{colors[color]}</span>
      </div>
      )
   }

    return (
      <div className="Report">
         {report}
      </div>
    );
  }


export default Report;