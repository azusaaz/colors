import React from 'react';
import shortid from 'shortid';
import './Report.css';

const Report = ({colors}) => {
  
   // generate report from a passed object
   let report=[];
   for(let color in colors){
      report.push(
      <div className="report-line" key={shortid.generate()}>
        <span className="diamond" style={{backgroundColor: color}} key={shortid.generate()}></span>
        <span key={shortid.generate()}>{color}</span>
        <span key={shortid.generate()}>{colors[color]}</span>
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