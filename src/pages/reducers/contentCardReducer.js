const contentCardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_NEXT_CARD_DATA':
      return {...state, ...action.data};
    default:
      return state;
  }
};

export default contentCardReducer;

