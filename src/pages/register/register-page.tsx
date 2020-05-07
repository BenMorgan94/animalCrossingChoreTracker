import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export default class RegisterPage extends React.Component<{}> {
  render() {
    return (
      <IonContent>
        <IonHeader>
          <IonToolbar>
            {" "}
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    );
  }
}