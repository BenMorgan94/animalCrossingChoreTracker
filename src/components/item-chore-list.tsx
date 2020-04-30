import React, { FunctionComponent } from "react";

import { Chore } from '../interfaces/chore-interface';
import { ChoreListItem } from "./item-chore-single";


interface Props {
  chores: Chore[];
  onDelete: (chore: Chore) => void;
}

export const ChoresList: FunctionComponent<Props> = ({ chores, onDelete }) => (
  <ul>
    {chores.map(chore => (
      <ChoreListItem chore={chore} onDelete={onDelete} />
    ))}
  </ul>
);
