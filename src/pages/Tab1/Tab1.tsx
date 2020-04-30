import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="page-content">
        <IonContent class="header-content">
          <IonHeader class="header-container">
            <IonToolbar>
              <IonTitle class="tab-title" size="large">Track your daily chores here!</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
