import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

export const Counter = () => {
  const count = useStoreState(state => state.count);
  const add1 = useStoreActions(actions => actions.add1);
  const add10 = useStoreActions(actions => actions.add10);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add1}>Add 1</button>
      <button onClick={add10}>Add 10</button>
    </div>
  );
};
