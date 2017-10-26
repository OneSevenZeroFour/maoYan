import {createStore} from "redux";
let store = createStore((state = {
	url:""
}, action) => {
  switch (action.type) {
    case "SETURL":
      return {url:action.url}
      break;
    default:
      return state
  }
})

export default store
