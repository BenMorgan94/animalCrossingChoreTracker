import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export default class LoginPage extends React.Component<{}> {
  render() {
    return (
      <IonContent>
        <IonHeader>
          <IonToolbar>
            {" "}
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    );
  }
}
