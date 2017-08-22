import React from 'react';
import propTypes from 'prop-types';
import { createStructuredSelector, createSelector } from 'reselect'

import { PageList } from "components";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ArticleActions from 'actions/articles'

class FrontPage extends React.Component {
	static propTypes = {
		getAllArticles: propTypes.func.isRequired
	}

	state = {
		articles: []
	}

	componentWillMount() {
		this.articles = this.fetchPages();
	}

	refresh() {

	}

	fetchPages() {
		return this.props.getAllArticles();
	}

	render() {

		return (
			<PageList
				refresh={this.refresh}
				pageLimit={10}
				category={"category filter"}
			/>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	articles: createSelector(state => state.articles, counterState => counterState),
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ArticleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage)
