import React, { useState } from "react";
import "./register-page.css";
import {
  IonContent,
  IonTitle,
  IonToolbar,
  IonPage,
  IonInput,
  IonButton,
} from "@ionic/react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  function registerUser() {
    window.location.href = "login-page";
    console.log(username, password, cPassword);
  }

  return (
    <IonPage id="main-content">
      <IonToolbar>
        {" "}
        <IonTitle class="register-header">Register</IonTitle>
      </IonToolbar>
      <IonContent scrollY={false}>
        <div id="username-container">
          <IonInput
            placeholder="Username"
            onIonChange={(e: any) => setUsername(e?.target.value)}
          />
        </div>
        <div id="password-container">
          <IonInput
            type="password"
            placeholder="Password"
            onIonChange={(e: any) => setPassword(e?.target.value)}
          />
        </div>
        <div id="confirm-password-container">
          <IonInput
            type="password"
            placeholder="Confirm Password"
            onIonChange={(e: any) => setCPassword(e?.target.value)}
          />
        </div>
        <div id="register-button-container">
          <IonButton disabled={username.length && password.length && cPassword.length > 0 ? false : true} expand="block" onClick={registerUser}>
            Register
          </IonButton>
        </div>
        <div id="return-login-container">
          <Link to="/login-page">Already have an account?</Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
