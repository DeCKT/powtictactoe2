import { useState } from "react";
import styles from "./page.module.css";

const board: string[][][][] = [
  [
    [
      ["X", "", "X"],
      ["X", "O", "X"],
      ["X", "O", "X"],
    ],
    [
      ["O", "O", "X"],
      ["O", "O", "X"],
      ["O", "O", "X"],
    ],
    [
      ["X", "O", "O"],
      ["X", "O", "O"],
      ["X", "O", "O"],
    ],
  ],
  [
    [
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["X", "O", "X"],
    ],
    [
      ["O", "O", "X"],
      ["O", "O", "X"],
      ["O", "O", "X"],
    ],
    [
      ["X", "O", "O"],
      ["X", "O", "O"],
      ["X", "O", "O"],
    ],
  ],
  [
    [
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["X", "O", "X"],
    ],
    [
      ["O", "O", "X"],
      ["O", "O", "X"],
      ["O", "O", "X"],
    ],
    [
      ["X", "O", "O"],
      ["X", "O", "O"],
      ["X", "O", "O"],
    ],
  ],
];

//           |          |
//  __|__|__ | __|__|__ | __|__|__
//  __|__|__ | __|__|__ | __|__|__
//    |  |   |   |  |   |   |  |
// ----------|----------|-----------
//  __|__|__ | __|__|__ | __|__|__
//  __|__|__ | __|__|__ | __|__|__
//    |  |   |   |  |   |   |  |
// ----------|----------|-----------
//  __|__|__ | __|__|__ | __|__|__
//  __|__|__ | __|__|__ | __|__|__
//    |  |   |   |  |   |   |  |
//           |          |

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.board}>
        {board.map((threeDimensionalArray, outerIndex) => (
          <div className={styles.boardRow} key={outerIndex}>
            {threeDimensionalArray.map((twoDimensionalArray, middleIndex) => (
              <div className={styles.boardCell} key={middleIndex}>
                {twoDimensionalArray.map((row, rowIndex) => (
                  <div className={styles.boardRow} key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <div className={styles.cell} key={cellIndex}>
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
