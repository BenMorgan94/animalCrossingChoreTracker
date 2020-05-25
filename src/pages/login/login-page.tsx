import React, { useState } from "react";
import "./login-page.css";
import {
  IonContent,
  IonTitle,
  IonToolbar,
  IonPage,
  IonInput,
  IonButton,
  IonImg,
} from "@ionic/react";
import { loginUser } from "../../firebaseConfig";

const LoginPage: React.FC = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const result = await loginUser(email, password);
    if (result) {
      window.location.href = "chore-page";
   }
  }

  function registerUser() {
    window.location.href = "register-page";
  }

  return (
    <IonPage id="main-login-content">
      <IonImg class="animal-image" alt="no" src="../assets/Logo.png"/>
      <IonToolbar>
        {" "}
        <IonTitle class="login-header">Login</IonTitle>
      </IonToolbar>
      <IonContent scrollY={false}>
        <div id="email-container">
          <IonInput
            class="email-input"
            clearInput
            placeholder="Email"
            onIonChange={(e: any) => setUsername(e?.target.value)}
          />
        </div>
        <div id="password-container">
          <IonInput
            class="password-input"
            clearInput
            type="password"
            placeholder="Password"
            onIonChange={(e: any) => setPassword(e?.target.value)}
          />
        </div>
        <div id="login-button-container">
          <IonButton
            disabled={email.length && password.length > 0 ? false : true}
            color="dark"
            expand="block"
            onClick={login}
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

export default LoginPage;
