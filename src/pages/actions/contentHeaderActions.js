export const addRedditData = data => ({
  type: 'ADD_REDDIT_DATA',
  ...data
});

export const updateRedditData = data => ({
  type: 'UPDATE_REDDIT_DATA',
  ...data
});

export const updateSearchTerms = (val) => ({
  type: 'UPDATE_SEARCH_TERM',
  data: { searchTerm: val}
});

export const loadNewCard = (val) => {
  return {
    type: 'LOAD_NEW_CARD',
    data: {loadNewCardData: val}
  }
}