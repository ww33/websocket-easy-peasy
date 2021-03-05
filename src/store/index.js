import { createStore } from "easy-peasy"; // 👈 import
import storeModel from "../model";
import thunk from "redux-thunk";
import { emit, init as websocketInit } from "../actions/websockets";

const store = createStore(storeModel, {
  middleware: [thunk.withExtraArgument({ emit })]
}); // 👈 create our store

websocketInit(store);

export default store;
