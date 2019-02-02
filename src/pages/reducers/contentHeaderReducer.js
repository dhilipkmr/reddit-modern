const contentHeaderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
    case 'LOAD_NEW_CARD':
    case 'ADD_REDDIT_DATA':
      return {...state, ...action.data};
    case 'UPDATE_REDDIT_DATA':
      const {after, children: actionChildren} = action.data;
      const children = [...state.children, ...actionChildren];
      return {...state, ...action.data, children: children};
    default:
      return state;
  }
};

export default contentHeaderReducer;

