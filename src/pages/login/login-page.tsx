import React, { useState } from "react";
import "./login-page.css";
import {
  IonContent,
  IonTitle,
  IonToolbar,
  IonPage,
  IonInput,
  IonButton,
  IonRippleEffect,
} from "@ionic/react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    window.location.href = "chore-page";
    console.log(username, password);
  }

  return (
    <IonPage id="main-content">
      <IonToolbar>
        {" "}
        <IonTitle class="login-header">Login</IonTitle>
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
        <div id="login-button-container">
          <IonButton
            disabled={username.length && password.length > 0 ? false : true}
            expand="block"
            onClick={loginUser}
          >
            Login
          </IonButton>
        </div>
        <div id="register-container">
          <Link to="/register-page">Register for an account</Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
