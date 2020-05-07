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
    console.log(username, password, cPassword);
  }

  return (
    <IonPage id="main-content">
      <IonToolbar>
        {" "}
        <IonTitle>Register</IonTitle>
      </IonToolbar>
      <IonContent scrollY={false}>
        <IonInput
          placeholder="Username"
          onIonChange={(e: any) => setUsername(e?.target.value)}
        />
        <IonInput
          placeholder="Password"
          onIonChange={(e: any) => setPassword(e?.target.value)}
        />
        <IonInput
          placeholder="Confirm Password"
          onIonChange={(e: any) => setCPassword(e?.target.value)}
        />
        <IonButton expand="block" onClick={registerUser}>
          Register
        </IonButton>
        <Link to="/login-page">Already have an account?</Link>
      </IonContent>
    </IonPage>
  );
};

export default Register;
