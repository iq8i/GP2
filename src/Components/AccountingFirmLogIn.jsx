import React from 'react';  // This should be at the top
import "../ComopnentsCss/clientLogin.css";
import logo from "../Assets/logo.svg";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link,useNavigate } from "react-router-dom";
import ButtonGroupContainer from "../Components/ButtonGroupContainer";
import Header from "./Header";
import WordsBetweenlines from "../Components/WordsBetweenlines";
import {validatePassword,validateEmail} from "../helperFunctions/ValidateInput";
import { useRef,useState } from 'react';
import { firmLoginData } from '../helperFunctions/SendLoginData';
function AccountingFirmLogIn() {
  const password = useRef();
  
const [passwordErrorMessage,setPassworeErrorMessage]= useState('');
  const navigate = useNavigate();
  const [submitError , setSubmitError] = useState('');

const email = useRef();
const [emailErrorMessage,setemailErrorMessage]= useState('');
function handleEmailErrorMessage(){
  const emailErrorMsg= validateEmail(email.current.value,'En');
  setemailErrorMessage(emailErrorMsg);
}

function handlePassworErrorMessage(){
const passwordErrorMsg = validatePassword(password.current.value,'En');
setPassworeErrorMessage(passwordErrorMsg);
}


  function handleEmailErrorMessage(){
    const emailErrorMsg= validateEmail(email.current.value,'En');
    setemailErrorMessage(emailErrorMsg);
  }

   async function handleSubmit(e){
    e.preventDefault();
    const response = await firmLoginData(email.current.value,password.current.value);
    
if(response){

  navigate('/');
}
else if(response ==='404'){  
setSubmitError( <div style={{color:'red'}}><p>You are not sign in !</p></div>);
}
else{
  setSubmitError( <div style={{color:'red'}}><p>Email or Password is Wrong !</p></div>);
}

}

  return (
    <>
      <Header className="SLHeader" />
      {(submitError !==''? submitError : '')}

      <form className="logInForm" onSubmit={handleSubmit}>
        <ButtonGroupContainer
          status="accountingFirm"
          style={{ width: "35rem" }}
        />
        <h1>Welcome back!</h1>
        <p>Enter your Credentials to access your account</p>
        <MDBInput ref={email} label="Enter your Firm's email address" id="form1Example1" type="email"  onBlur={handleEmailErrorMessage}  />
                {emailErrorMessage&& <p style={{ color: 'red', textAlign: 'right' }}>{emailErrorMessage}</p>}
        
        <Link
          style={{
            marginLeft: "auto",
            marginRight: "0",
            display: "block",
            textAlign: "right",
            marginBottom: "-3rem",
          }}
        >
          Forget password?
        </Link>
        <MDBInput ref={password} label="Enter your Password" id="form1" type="text"  onBlur={handlePassworErrorMessage}  />
                {passwordErrorMessage&& <p style={{ color: 'red', textAlign: 'right' }}>{passwordErrorMessage}</p>}
        
        <MDBCheckbox id="form1Example3" label="Remember me" defaultChecked />
        <MDBRow className="mb-4">
          <MDBCol className="d-flex justify-content-center"></MDBCol>
          <MDBCol style={{ width: 155 }}></MDBCol>
        </MDBRow>

        <MDBBtn type="submit" className="mb-4" block>
          Sign in
        </MDBBtn>

        <WordsBetweenlines text="or Log in with" />
        <div
          className="text-center"
          style={{ display: "flex", gap: "10px", marginTop: "3rem" }}
        >
          <MDBBtn
            color="link"
            style={{
              border: "2px solid rgba(0, 0, 0, 0.5)",
              marginRight: "1rem",
              flex: "1",
            }}
          >
            {" "}
            <MDBIcon fab icon="google" style={{ color: "black" }} />
          </MDBBtn>
          <MDBBtn
            color="link"
            style={{
              border: "2px solid rgba(0, 0, 0, 0.5)",
              flex: "1",
            }}
          >
            <MDBIcon fab icon="apple" style={{ color: "black" }} />{" "}
          </MDBBtn>
        </div>
        <p style={{ marginTop: "1.5rem" }}>
          Not a member? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </>
  );
}

export default AccountingFirmLogIn;
