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
import { registerUser } from "../../firebaseConfig";
import { toast } from "../../toast";

const RegisterPage: React.FC = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  async function register() {
    if (password !== cPassword) {
      return toast("Passwords do not match");
    }
    if (email.trim() === "" || password.trim() === "") {
      return toast("Username and password are required");
    }

    const result = await registerUser(email, password);

    if (result) {
      window.location.href = "login-page";
    }
  }

  function returnToLogin() {
    window.location.href = "login-page";
  }

  return (
    <IonPage id="main-content">
      <IonToolbar>
        {" "}
        <IonTitle class="register-header">Register</IonTitle>
      </IonToolbar>
      <IonContent scrollY={false}>
        <div id="email-container">
          <IonInput
            placeholder="Email"
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
          <IonButton
            disabled={
              email.length && password.length && cPassword.length > 0
                ? false
                : true
            }
            expand="block"
            onClick={register}
            color="dark"
          >
            Register
          </IonButton>
        </div>
        <div id="return-login-container">
          <IonButton fill="clear" color="dark" onClick={returnToLogin}>
            Already have an account?
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
