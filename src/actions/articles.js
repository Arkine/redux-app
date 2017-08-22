import {
	GET_ARTICLES_STARTED,
	GET_ARTICLES_SUCCESS,
	GET_ARTICLES_FAILED
} from 'constants/Articles';

import { createAction } from 'redux-actions';

export const getArticlesStarted = createAction(GET_ARTICLES_STARTED);
export const getArticlesSuccess = createAction(GET_ARTICLES_SUCCESS);
export const getArticlesFailed = createAction(GET_ARTICLES_FAILED);

export function getAllArticles() {
	return (dispatch, getState) => {
		const state = getState();
		console.log('state...:', getState());

		const articles = [
			{
				id: "1234",
				title: "article 1"
			},
			{
				id: "424242",
				title: "article 2"
			},
			{
				id: "234523",
				title: "article 4"
			},
			{
				id: "1234",
				title: "article 6"
			},
		];

		dispatch(getArticlesStarted());
		if (articles.length) {
			dispatch(getArticlesSuccess(articles));
		} else {
			dispatch(getArticlesFailed());
		}
	}
}