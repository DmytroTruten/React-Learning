const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather":
      return (initialWagonState = {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      });

    case "travel":
      const updatedState = {
        ...state,
        supplies: state.supplies - action.payload * 20,
        distance: state.distance + action.payload * 10,
        days: state.days + action.payload,
      };
      if (updatedState.supplies <= 0) {
        return state;
      } else {
        return (initialWagonState = {
          ...state,
          supplies: state.supplies - action.payload * 20,
          distance: state.distance + action.payload * 10,
          days: state.days + action.payload,
        });
      }
    case "tippedWagon":
      return (initialWagonState = {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1,
      });
    default:
      return state;
  }
};

let initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

let wagon = reducer(undefined, {});
wagon = reducer(initialWagonState, { type: "travel", payload: 1 });
wagon = reducer(initialWagonState, { type: "gather" });
wagon = reducer(initialWagonState, { type: "tippedWagon" });
wagon = reducer(initialWagonState, { type: "travel", payload: 3 });
console.log(wagon);
