// As state gets more complicated, we may have multiple reducers and need to use `combineReducers`
const rootReducer = (state, action) => {
  if (action.type === `UPDATE ACKNOWLEDGEMENT`) {
    return Object.assign({}, state, {
      hasAcknowledged: !state.hasAcknowledged,
    })
  }
  return state
}

export { rootReducer }
