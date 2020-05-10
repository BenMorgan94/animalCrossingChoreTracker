import React, { useState } from "react";
import "./login-page.css";
import {
  IonContent,
  IonTitle,
  IonToolbar,
  IonPage,
  IonInput,
  IonButton,
} from "@ionic/react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    window.location.href = "chore-page";
    console.log(username, password);
  }

  function registerUser() {
    window.location.href = "register-page";
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
            color="dark"
            expand="block"
            onClick={loginUser}
          >
            Login
          </IonButton>
        </div>
        <div id="register-container">
          <IonButton fill="clear" color="dark" onClick={registerUser}>
            Register for an account
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
