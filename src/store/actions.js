function update(store, value = {}) {
  return {
    type: `${store}UPDATE`,
    value,
  };
}

export function updateMapToProps(store, value = {}) {
  return (dispatch) => {
    dispatch({
      type: `${store}UPDATE`,
      value,
    });
  };
}

export default update;
