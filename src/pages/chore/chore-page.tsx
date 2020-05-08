import React from "react";
import "./chore-page.css";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonPopover,
  IonIcon,
  IonMenuButton,
  IonMenu,
  IonList,
  IonItem,
} from "@ionic/react";

import { calendarOutline, helpCircleOutline, personOutline, logOutOutline, listCircleOutline } from 'ionicons/icons';
import { Chore } from "../../interfaces/chore-interface";
import { NewChoreForm } from "../../components/form-new-chore/form-new-chore";
import { ChoresList } from "../../components/item-chore-list/item-chore-list";

interface State {
  newChore: Chore;
  chores: Chore[];
  showInputPopover: boolean;
}

export default class ChorePage extends React.Component<{}, State> {
  state = {
    newChore: {
      key: 1,
      name: "",
    },

    chores: [],
    showInputPopover: false,
  };

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonMenuButton menu="side-menu" slot="start" color="dark" />
            <IonTitle class="header-title" size="large">
              {" "}
              Your daily chores{" "}
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
              <IonItem>Profile<IonIcon slot="end" icon={personOutline}/></IonItem>
              <IonItem>Chore list<IonIcon slot="end" icon={listCircleOutline}/></IonItem>
              <IonItem>Calendar<IonIcon slot="end" icon={calendarOutline}/></IonItem>
              <IonItem>Help<IonIcon slot="end" icon={helpCircleOutline}/></IonItem>
              <IonItem onClick={this.logout}>Logout<IonIcon slot="end" icon={logOutOutline}/></IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonContent id="content">
          <IonHeader class="header-chore">
            <IonTitle>Add a new chore:</IonTitle>
          </IonHeader>

          <IonFab
            class="new-chore-button"
            horizontal="center"
            vertical="top"
            slot="fixed"
          >
            <IonFabButton color="dark" size="small" onClick={this.showPopover}>
              <div id="add-icon">+</div>
            </IonFabButton>
          </IonFab>

          <IonPopover
            backdropDismiss={true}
            isOpen={this.state.showInputPopover}
            onDidDismiss={this.hidePopover}
          >
            <IonIcon
              class="close-icon"
              name="close"
              onClick={this.hidePopover}
            />
            <NewChoreForm
              chore={this.state.newChore}
              onAdd={this.addChore}
              onChange={this.handleChoreChange}
            />
          </IonPopover>
          <br />
          <br />
          <ChoresList chores={this.state.chores} onDelete={this.deleteChore} />
        </IonContent>
      </>
    );
  }

  logout = () => {
    window.location.href = "login-page";
  }

  showPopover = () => {
    this.setState({
      showInputPopover: true,
    });
  };

  hidePopover = () => {
    this.setState({
      showInputPopover: false,
    });
  };

  addChore = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState((previousState) => ({
      newChore: {
        key: previousState.newChore.key + 1,
        name: "",
      },
      chores: [...previousState.chores, previousState.newChore],
    }));
  };

  handleChoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newChore: {
        ...this.state.newChore,
        name: event.target.value,
      },
    });
  };

  deleteChore = (taskToDelete: Chore) => {
    this.setState((previousState) => ({
      chores: [
        ...previousState.chores.filter(
          (chore) => chore.key !== taskToDelete.key
        ),
      ],
    }));
  };
}
