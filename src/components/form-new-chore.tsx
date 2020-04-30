import React, { FunctionComponent } from 'react';
import { Chore } from '../interfaces/chore-interface';
import { IonGrid, IonRow, IonButton } from '@ionic/react';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    chore: Chore;
 }

export const NewChoreForm: FunctionComponent<Props> = ({ onChange, onAdd }) => (
   <form onSubmit={onAdd}>
      <IonGrid>
         <IonRow>
            <input placeholder='Enter new to-do here:' onChange={onChange}/>
         </IonRow> <br/>
         <IonRow>
            <IonButton fill='outline' type='submit'> Confirm </IonButton>
         </IonRow>
      </IonGrid>
   </form>
);