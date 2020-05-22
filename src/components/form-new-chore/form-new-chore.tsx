import React, { FunctionComponent } from "react";
import "./form-new-chore.css";
import { Chore } from "../../interfaces/chore-interface";
import { IonGrid, IonRow, IonButton } from "@ionic/react";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  chore: Chore;
  inputValue: string;
  inputId: string;
}

export const NewChoreForm: FunctionComponent<Props> = ({ onChange, onAdd, inputId, chore, inputValue }) => (
  <form onSubmit={onAdd}>
    <IonGrid>
      <IonRow>
        <input className="new-chore-input" id={inputId} value={inputValue} placeholder="Enter new chore here:" onChange={onChange} />
      </IonRow>{" "}
      <br />
      <IonRow class="new-chore-button-row">
        <IonButton disabled={chore.name === ""} class="confirm-button" color="dark" fill="solid" type="submit">
          {" "}
          Confirm{" "}
        </IonButton>
      </IonRow>
    </IonGrid>
  </form>
);
