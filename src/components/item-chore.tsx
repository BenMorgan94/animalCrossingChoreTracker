import React, { FunctionComponent } from "react";
import { IonGrid, IonCol, IonRow, IonIcon, IonList, } from "@ionic/react";

import { Chore } from '../interfaces/chore-interface';


interface Props {
  chore: Chore;
  onDelete: (chore: Chore) => void;
}

export const ChoreListItem: FunctionComponent<Props> = ({ chore, onDelete }) => {
  const onClick = () => {
    onDelete(chore);
  };

  return (
    <IonList>
      <IonGrid>
        <IonRow>
          <IonCol>
            {chore.name}
          </IonCol>
          <IonCol>
            <IonIcon name="close" onClick={onClick}/>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonList>
  );
};
