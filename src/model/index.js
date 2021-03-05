import { action } from "easy-peasy";

const storeModel = {
  count: 0,
  add1: action(state => {
    state.count++;
  }),
  add10: action(state => {
    state.count = state.count + 10;
  })
};

export default storeModel;
