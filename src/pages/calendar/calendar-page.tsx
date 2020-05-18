import React from "react";
import "./calendar-page.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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

const CalendarPage: React.FC = () => {
  function navigateProfile() {
    window.location.href = "profile-page";
  }

  function navigateChores() {
    window.location.href = "chore-page";
  }

  function navigateCalendar() {
    window.location.href = "calendar-page";
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
            <IonItem onClick={navigateProfile}>
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
        <Calendar className="calendar"></Calendar>
      </IonContent>
    </>
  );
};

export default CalendarPage;
