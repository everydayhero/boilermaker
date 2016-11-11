export default ({
  store,
  params,
  query
}) => {
  return {
    dispatch: store.dispatch,
    params,
    state: store.getState(),
    query
  }
}
