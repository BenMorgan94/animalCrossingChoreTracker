import React from "react";
import './Tab1.css';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonPopover,
  IonIcon,
} from "@ionic/react";

import { Chore } from "../../interfaces/chore-interface";
import { NewChoreForm } from "../../components/form-new-chore/form-new-chore";
import { ChoresList } from "../../components/item-chore-list/item-chore-list";

interface State {
  newChore: Chore;
  chores: Chore[];
  showInputPopover: boolean;
}

export default class Tab1 extends React.Component<{}, State> {
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
            <IonTitle class="header-title" size="large"> Your daily chores </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonHeader class="header-chore">
            <IonTitle>Add a new chore:</IonTitle>
          </IonHeader>

          <IonFab class="new-chore-button" horizontal="center" vertical="top" slot="fixed">
            <IonFabButton size="small" onClick={this.showPopover}>
              +
            </IonFabButton>
          </IonFab>

          <IonPopover
            backdropDismiss={true}
            isOpen={this.state.showInputPopover}
            onDidDismiss={this.hidePopover}
          >
            <IonIcon class="close-icon" name="close" onClick={this.hidePopover}/>
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
