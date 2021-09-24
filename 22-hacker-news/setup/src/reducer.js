import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbpages: action.payload.nbpages,
        page: action.payload.page,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };

    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextpage = state.page + 1;
        if (nextpage > state.nbPages - 1) {
          nextpage = 0;
        }
        return { ...state, page: nextpage };
      }
      if (action.payload === "dec") {
        let prevpage = state.page - 1;
        if (prevpage < 0) {
          prevpage = state.nbPages - 1;
        }
        return { ...state, page: prevpage };
      }
  }
};
export default reducer;
