import {
	GET_ARTICLES_STARTED,
	GET_ARTICLES_SUCCESS,
	GET_ARTICLES_FAILED
} from "constants/Articles";

export function articles(state = [], action) {
	switch (action.type) {
		case GET_ARTICLES_SUCCESS:
			return [...action.payload];
		default:
			return state;
	}
}

export function articlesLoaded(state = false, action) {
	switch (action.type) {
		case GET_ARTICLES_SUCCESS:
			return true;
		case GET_ARTICLES_FAILED:
		default:
			return state;
	}
}