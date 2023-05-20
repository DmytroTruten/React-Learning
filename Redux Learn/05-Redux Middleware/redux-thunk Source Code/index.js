function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      // If the action is a function (as happens when we dispatch thunks returned by thunk action creators), then redux-thunk invokes that function. If the action is not a function (as happens when we dispatch plain objects), redux-thunk passes it through to the next step in the middleware pipeline.
      if (typeof action === "function") {
        return action(dispatch, getState, extraArgument);
      }

      return next(action);
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
