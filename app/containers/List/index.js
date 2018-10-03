/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectList from './selectors';
import { getListAction } from './actions';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class List extends React.PureComponent {
  componentWillMount() {
    this.getList();
  }

  getList = () => {
    this.props.dispatch(getListAction());
  };

  render() {
    const { data } = this.props.list || {};
    // console.log('data', data);
    return (
      <div>
        <Helmet>
          <title>List Page</title>
          <meta name="description" content="Description of List" />
        </Helmet>
        <div>{data.original_title}</div>
      </div>
    );
  }
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'list', reducer });

export default compose(
  withReducer,
  withConnect,
)(List);
