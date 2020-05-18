import React from "react";
import "./chore-page.css";
import { db } from "../../firebaseConfig";
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

import {
  calendarOutline,
  helpCircleOutline,
  personOutline,
  logOutOutline,
  listCircleOutline,
  trashOutline,
} from "ionicons/icons";
import { Chore } from "../../interfaces/chore-interface";
import { NewChoreForm } from "../../components/form-new-chore/form-new-chore";
import { ChoresList } from "../../components/item-chore-list/item-chore-list";

interface State {
  newChore: Chore;
  chores: Chore[];
  showInputPopover: boolean;
  storedChoresData: any[];
  inputValue: string;
  inputId: string;
}

export default class ChorePage extends React.Component<{}, State> {
  state = {
    newChore: {
      key: 1,
      name: "",
      done: false,
    },

    chores: [],
    showInputPopover: false,
    storedChoresData: [],
    inputValue: "",
    inputId: "input-element",
  };

  componentWillMount() {
    db.collection("chores")
      .get()
      .then((querySnapshot) => {
        this.setState({
          storedChoresData: querySnapshot.docs.map((doc) => doc.data()),
        });
        this.setState({
          chores: [...this.state.storedChoresData],
        });
      });
  }

  logout() {
    window.location.href = "login-page";
  };

  navigateChorers() {
    window.location.href = "chore-page";
  };

  navigateCalendar() {
    window.location.href = "calendar-page";
  };

  showPopover() {
    this.setState({
      showInputPopover: true,
    });
  };

  focusInput() {
    setTimeout(() => {
      document.getElementById("input-element")?.focus();
    }, 1);
  };

  hidePopover() {
    this.setState({
      showInputPopover: false,
      inputValue: "",
    });
  };

  addChore(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.setState((previousState) => ({
      newChore: {
        key: previousState.newChore.key + 1,
        name: "",
        done: false,
      },
      chores: [...previousState.chores, previousState.newChore],
      inputValue: "",
    }));

    db.collection("chores").add({
      done: this.state.newChore.done,
      key: this.state.newChore.key,
      name: this.state.newChore.name,
    });
  };


  handleChoreChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      newChore: {
        ...this.state.newChore,
        name: event.target.value,
      },
      inputValue: event.target.value,
    });
  };

  deleteAllChores() {
    this.setState(() => ({
      chores: [],
    }));
    db.collection("chores")
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
      });
  };

  // TODO: refactor local deletion - currently limited by keys being the same
  deleteChore(choreToDelete: Chore) {
    this.setState((previousState) => ({
      chores: [
        ...previousState.chores.filter(
          (chore) => chore.key !== choreToDelete.key,
          db
            .collection("chores")
            .where("name", "==", choreToDelete.name)
            .get()
            .then((res) => {
              res.forEach((element) => {
                element.ref.delete();
              });
            })
        ),
      ],
    }));
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
            <IonIcon
              onClick={this.deleteAllChores}
              class="delete-icon"
              size="medium"
              slot="end"
              icon={trashOutline}
            />
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
              <IonItem onClick={this.navigateChorers}>
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
            onDidPresent={this.focusInput}
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
              inputValue={this.state.inputValue}
              inputId={this.state.inputId}
            />
          </IonPopover>
          <br />
          <br />
          <ChoresList chores={this.state.chores} onDelete={this.deleteChore} />
        </IonContent>
      </>
    );
  }
}
