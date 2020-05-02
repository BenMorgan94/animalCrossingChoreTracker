import React, { FunctionComponent } from "react";
import "./item-chore-list.css";
import { Chore } from "../../interfaces/chore-interface";
import { ChoreListItem } from "../item-chore-single/item-chore-single";

interface Props {
  chores: Chore[];
  onDelete: (chore: Chore) => void;
}

export const ChoresList: FunctionComponent<Props> = ({ chores, onDelete }) => {
  const generateKey = () => {
    return Math.random();
  };

  return (
    <ul className="chore-list">
      {chores.map((chore) => (
        <ChoreListItem chore={chore} onDelete={onDelete} key={generateKey()} />
      ))}
    </ul>
  );
};
