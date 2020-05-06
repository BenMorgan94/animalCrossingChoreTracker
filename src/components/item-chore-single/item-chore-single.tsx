import React, { FunctionComponent } from "react";
import "./item-chore-single.css";
import { IonGrid, IonCol, IonRow, IonIcon, IonList, IonCheckbox } from "@ionic/react";
import { Chore } from "../../interfaces/chore-interface";

interface Props {
  chore: Chore;
  onDelete: (chore: Chore) => void;
}

export const ChoreListItem: FunctionComponent<Props> = ({
  chore,
  onDelete,
}) => {
  const onClick = () => {
    onDelete(chore);
  };

  return (
    <IonList>
      <IonGrid>
        <IonRow>
          <IonCol class="chore-column">
            <div id="chore-container">
              <IonCheckbox class="chore-checkbox" />
              <div id="chore-name">{chore.name}</div>
            </div>
            <IonIcon name="close" onClick={onClick} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonList>
  );
};
