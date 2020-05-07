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
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log(username, password);
  };

  return (
    <IonPage id="main-content">
      <IonToolbar>
        {" "}
        <IonTitle>Login</IonTitle>
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
        <IonButton expand="block" onClick={loginUser}>
          Login
        </IonButton>
            <Link to="/register-page">Register for an account</Link>
      </IonContent>
    </IonPage>
  );
};

export default Login;
