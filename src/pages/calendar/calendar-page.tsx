import React from "react";
import "./calendar-page.css";
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

const Calendar: React.FC = () => {
  function navigateCalendar() {
    window.location.href = "calendar-page";
  }

  function navigateChores() {
    window.location.href = "chore-page";
  }

  function logout() {
    window.location.href = "login-page";
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton menu="side-menu" slot="start" color="dark" />
          <IonTitle class="header-title" size="large">
            {" "}
            Calendar{" "}
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
            <IonItem>
              Profile
              <IonIcon slot="end" icon={personOutline} />
            </IonItem>
            <IonItem onClick={navigateChores}>
              Chore list
              <IonIcon slot="end" icon={listCircleOutline} />
            </IonItem>
            <IonItem onClick={navigateCalendar}>
              Calendar
              <IonIcon slot="end" icon={calendarOutline} />
            </IonItem>
            <IonItem>
              Help
              <IonIcon slot="end" icon={helpCircleOutline} />
            </IonItem>
            <IonItem onClick={logout}>
              Logout
              <IonIcon slot="end" icon={logOutOutline} />
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonContent id="content">

      </IonContent>
    </>
  );
};

export default Calendar;
