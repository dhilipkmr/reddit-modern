const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_REDDIT_DATA':
    console.log('action.data', action.data);
      return {...state, ...action.data};
    case 'UPDATE_REDDIT_DATA':
      const {after, children: actionChildren} = action.data;
      const children = [...state.children, ...actionChildren];
      return {...state, ...action.data, children: children};
    default:
      return state;
  }
};

export default homeReducer;

