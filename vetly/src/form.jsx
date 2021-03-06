import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {


function cambiarLogin() {

      document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
      document.querySelector('.cont_form_login').style.display = "block";
      document.querySelector('.cont_form_sign_up').style.opacity = "0";               

      setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
      setTimeout(function(){    
      document.querySelector('.cont_form_sign_up').style.display = "none";
    },200);  
  }

function cambiarSignUp(at) {

    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";
  
    setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);  

    setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400);  


}    



function ocultarLoginSignUp() {

    document.querySelector('.cont_forms').className = "cont_forms";  
    document.querySelector('.cont_form_sign_up').style.opacity = "0";               
    document.querySelector('.cont_form_login').style.opacity = "0"; 

    setTimeout(function(){
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  },500);  
  
  }
   


    return (
      <div className="cotn_principal">
<div className="cont_centrar">

  <div className="cont_login">
<div className="cont_info_log_sign_up">
      <div className="col_md_login">
<div className="cont_ba_opcitiy">
        
        <h2>Logga In</h2>  
  <p>Är du redan medlem?</p> 
  <button className="btn_login" onClick={cambiarLogin}>Logga In</button>
  </div>
  </div>
<div className="col_md_sign_up">
<div className="cont_ba_opcitiy">
  <h2>Registrera Dig</h2>

  
  <p>Vill du registrera ett nytt konto?</p>

  <button className="btn_sign_up" onClick={cambiarSignUp}>Skapa Konto</button>
</div>
  </div>
       </div>

    
    <div className="cont_back_info">
       <div className="cont_img_back_grey">
       <img src="https://cdn.pixabay.com/photo/2014/07/23/19/31/amur-400400_960_720.jpg" alt="" />
       </div>
       
    </div>
<div className="cont_forms" >
    <div className="cont_img_back_">
       <img src="https://cdn.pixabay.com/photo/2014/07/23/19/31/amur-400400_960_720.jpg" alt="" />
       </div>
 <div className="cont_form_login">
<a href="#" onClick={ocultarLoginSignUp}><i className="material-icons">&#xE5C4;</i></a>
   <h2>Logga In</h2>
 <input type="text" placeholder="Email" />
<input type="password" placeholder="Lösenord" />
<button className="btn_login" onClick={cambiarLogin}>Logga In</button>
  </div>
  
   <div className="cont_form_sign_up">
<a href="#" onClick={ocultarLoginSignUp}><i className="material-icons">&#xE5C4;</i></a>
     <h2>Skapa Konto</h2>
<input type="text" placeholder="Email" />
<input type="password" placeholder="Lösenord" />
<input type="password" placeholder="Bekräfta Lösenord" />
<button className="btn_sign_up" onClick={cambiarSignUp}>Skapa Konto</button>

  </div>

    </div>
    
  </div>
 </div>
</div>
    );
  }
}

export default App;
