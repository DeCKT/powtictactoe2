import { useState } from "react";

interface cellData {
    played: boolean,
    token: string,
    player: number
}

export default function Cell(props : cellData) {
  return <div className="cell">{props.played ? }</div>;
}
