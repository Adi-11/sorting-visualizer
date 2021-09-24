import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BubbleSort } from "../Algos/BubbleSort";
import * as Sorting from "../Algos/MergeSort";

import "./style.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const ANIMATION_SPEED_MS = 500;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_BARS = 10;

// This is the main color of the array bars.
const PRIMARY_COLOR = "black";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

const randomIntFromInterval = (min: number, max: number): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const SortingVisualizer: React.FC<any> = () => {
  const classes = useStyles();
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    resetArray();
  }, []);

  const callHeapSort = (): void => {
    console.log("Heap");
  };
  const callQuickSort = (): void => {
    console.log("quick");
  };
  const callBubbleSort = (): void => {
    console.log("bubble");
  };

  const resetArray = (): void => {
    const array: number[] = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randomIntFromInterval(5, 700));
    }
    setArray(array);
  };

  const callMergeSort = (): void => {
    // console.log("Merge >>>>>>>>>>", array);
    const animation: any[] = Sorting.mergeSort(array);
    // const animation: any[] = BubbleSort(array);
    for (let i = 0; i < animation.length; i++) {
      const arrayBars: any = document.getElementsByClassName("array-bar");
      const isColorChanges: boolean = i % 3 !== 2;
      if (isColorChanges) {
        const [barOneIdx, barTwoIdx] = animation[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animation[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };
  return (
    <div>
      <AppBar position="static" style={{ padding: 20 }}>
        <Toolbar variant="regular">
          <Typography
            variant="h4"
            color="inherit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "Roboto Mono",
            }}
          >
            Sorting-Visualizer
          </Typography>
        </Toolbar>
        <div
          style={{
            marginLeft: 100,
            maxWidth: "40%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              callMergeSort();
            }}
          >
            Merge Sort
          </Button>
          {/* <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              callHeapSort();
            }}
          >
            Heap Sort
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              callQuickSort();
            }}
          >
            Quick Sort
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              callBubbleSort();
            }}
          >
            Bubble Sort
          </Button> */}
        </div>
      </AppBar>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          maxWidth: "70%",
          margin: "auto",
        }}
      >
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              width: `20px`,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {/* <span style={{ color: "white", textAlign: "center" }}>{value}</span> */}
          </div>
        ))}
      </div>
      <div style={{ bottom: 0, right: 0 }}>
        <button className="btn-rules" onClick={() => resetArray()}>
          Reset Bars
        </button>
      </div>
    </div>
  );
};
