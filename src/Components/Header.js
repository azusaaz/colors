import React,{Component} from 'react';
import './Header.css';

export class Header extends Component{
  
    // Toggle form page and report page
    onClick=(e)=>{
      const {setCurrentPage} = this.props;

      setCurrentPage(e.target.getAttribute("data-name"));
    }
    
    // For tab styling change
    record  = localStorage.getItem('colorRecord');
    bold= {fontWeight:'bold'};
    disable = {pointerEvents: 'none', opacity: 0.5};

  render(){
    const {currentPage} = this.props;
    return (
      <div className="Header">

        <div className="tabs">

         <div className="tab" id="tab-form" data-name="form" onClick={this.onClick} 
         style={currentPage==='form' ? this.bold : null}>Form</div>

         <div className="tab" id="tab-report" data-name="report" onClick={this.onClick} 
         style={!this.record ? this.disable : currentPage === 'report' ? this.bold : null}>Report</div>

        </div>

        <div id="navRight">
          <img id="dia" src="dia.png" alt=""/>
          <div id="siteName">colors</div>
        </div>
      </div>
    );
  }
}

export default Header;