const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather":
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };

    case "travel":
      return {
        ...state,
        supplies: state.supplies - action.payload * 20,
        distance: state.distance + action.payload * 10,
        days: state.days + action.payload,
      };
    case "tippedWagon":
      return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days++,
      };
    default:
      return state;
  }
};

const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

let wagon = reducer(undefined, {});
console.log(wagon);
wagon = reducer(initialWagonState, { type: "travel", payload: 1 });
console.log(wagon);
wagon = reducer(initialWagonState, { type: "gather"});
console.log(wagon);
