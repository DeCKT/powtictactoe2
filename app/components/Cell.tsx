import { useState } from "react";

interface cellData {
  played: boolean;
  token: string;
  player: string;
}

export default function Cell(props: cellData) {
  return (
    <div className="cell">
      {props.played ? props.token : null}
      <span>{props.player}</span>
    </div>
  );
}
