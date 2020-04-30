import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonButton, IonPopover, } from '@ionic/react';

import { Chore } from '../../interfaces/chore-interface';
import { NewChoreForm } from "../../components/form-new-chore";
import { ChoresList } from "../../components/item-chore-list";

interface State {
  newChore: Chore;
  chores: Chore[];
  showInputPopover: boolean;
}

export default class Tab1 extends React.Component<{}, State> {
  state = {
    newChore: {
      id: 1,
      name: ""
    },
    
    chores: [],
    showInputPopover: false,
  };

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="small"> Track your daily chores here! </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonFab horizontal="center" vertical="top" edge={true} slot="fixed">
            <IonFabButton size="small" onClick={this.showPopover}>
              +
            </IonFabButton>
          </IonFab>

          <IonPopover 
            backdropDismiss={true}
            isOpen={this.state.showInputPopover}
            onDidDismiss={this.hidePopover}
          >
            <IonToolbar>
              <h4> New To-Do: </h4>
            </IonToolbar>
            
            <NewChoreForm
              chore={this.state.newChore}
              onAdd={this.addChore}
              onChange={this.handleChoreChange}
            />

            <div>
              <IonButton expand="block" onClick={this.hidePopover}> Close </IonButton>
            </div> <br/>
          </IonPopover>

          <ChoresList chores={this.state.chores} onDelete={this.deleteChore} />
        </IonContent>
      </>
    );
  }

  private showPopover = () => {
    this.setState({
      showInputPopover: true,
    });
  }

  private hidePopover = () => {
    this.setState({
      showInputPopover: false,
    });
  }

  private addChore = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newChore: {
        id: previousState.newChore.id + 1,
        name: ""
      },
      chores: [...previousState.chores, previousState.newChore]
    }));
  };

  private handleChoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newChore: {
        ...this.state.newChore,
        name: event.target.value
      }
    });
  };

  private deleteChore = (taskToDelete: Chore) => {
    this.setState(previousState => ({
      chores: [
        ...previousState.chores.filter(chore => chore.id !== taskToDelete.id)
      ]
    }));
  };
};
