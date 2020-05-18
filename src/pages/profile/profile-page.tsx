import React from "react";
import "./profile-page.css";
import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonTitle,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
} from "@ionic/react";
import {
  personOutline,
  listCircleOutline,
  calendarOutline,
  helpCircleOutline,
  logOutOutline,
} from "ionicons/icons";

export default class ProfilePage extends React.Component<{}> {
  navigateCalendar() {
    window.location.href = "calendar-page";
  }

  navigateChores() {
    window.location.href = "chore-page";
  }

  logout() {
    window.location.href = "login-page";
  }

  navigateProfile() {
    window.location.href = "profile-page";
  }
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonMenuButton menu="side-menu" slot="start" color="dark" />
            <IonTitle class="header-title" size="large">
              {" "}
              Profile{" "}
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonMenu menuId="side-menu" contentId="content" side="start">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem onClick={this.navigateProfile}>
                Profile
                <IonIcon slot="end" icon={personOutline} />
              </IonItem>
              <IonItem onClick={this.navigateChores}>
                Chore list
                <IonIcon slot="end" icon={listCircleOutline} />
              </IonItem>
              <IonItem onClick={this.navigateCalendar}>
                Calendar
                <IonIcon slot="end" icon={calendarOutline} />
              </IonItem>
              <IonItem>
                Help
                <IonIcon slot="end" icon={helpCircleOutline} />
              </IonItem>
              <IonItem onClick={this.logout}>
                Logout
                <IonIcon slot="end" icon={logOutOutline} />
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonContent id="content"></IonContent>
      </>
    );
  }
}
