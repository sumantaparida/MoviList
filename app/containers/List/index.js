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
import { ListContainer } from './style';
import Album from '../../components/Album';

/* eslint-disable react/prefer-stateless-function */
export class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.getList();
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log('next props', nextProps.list.data.items);
  // }
  componentDidUpdate() {
    // console.log('did updates', this.props.list);
  }

  getList = () => {
    this.props.dispatch(getListAction());
  };

  render() {
    const { list } = this.props;
    // console.log('props', list.data);
    return (
      <ListContainer>
        <Helmet>
          <title>List page</title>
          <meta name="description" content="Description of List" />
        </Helmet>
        {!list.loading ? (
          <span>Loading....</span>
        ) : (
          <Album
            items={list.items}
            description={list.description}
            name={list.name}
          />
        )}
      </ListContainer>
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
