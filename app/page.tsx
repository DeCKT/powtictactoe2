import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [board, setBoard] = useState();

  return (
    <main>
      <div className="board"></div>
    </main>
  );
}
