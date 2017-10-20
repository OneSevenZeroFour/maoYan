import {createStore} from "redux";
let store = createStore((state = {
}, action) => {
  switch (action.type) {
    case "":
      return {}
      break;
    default:
      return state
  }
})

export default store
