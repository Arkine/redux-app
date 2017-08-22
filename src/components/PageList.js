import React from 'react';
import PropTypes from 'prop-types';


export default class PageList extends React.Component {
	static propTypes = {
		'pageLimit': PropTypes.number,
		'refresh': PropTypes.func,
	}

	render() {
		return(
			<div class="PageList">

			</div>
		);
	}
}