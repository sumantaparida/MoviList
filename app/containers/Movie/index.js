/**
 *
 * Movie
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMovie from './selectors';
import { getMovieDetailsAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import { MovieContainer } from './style';

/* eslint-disable react/prefer-stateless-function */
const styles = () => ({
  appBar: {
    position: 'relative',
  },
});
export class Movie extends React.PureComponent {
  componentWillMount() {
    this.getMovie();
  }
  getMovie = () => {
    const { pathname } = this.props.location;
    const id = pathname.split('/')[2];
    this.props.dispatch(getMovieDetailsAction(id));
  };
  render() {
    const { movie } = this.props;
    return (
      <MovieContainer>
        <Helmet>
          <title>Movie Details</title>
          <meta name="description" content="Description of Movie Details" />
        </Helmet>
        <AppBar position="static" className={styles.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Movie Details
            </Typography>
          </Toolbar>
        </AppBar>
        {!movie.loading ? (
          <span>Loading...</span>
        ) : (
          <Grid container spacing={24} justify="center">
            <Grid item xs={6} className="imgCard">
              <Paper className="papercard" elevation={1}>
                <Grid item xs={4} className="imgCard">
                  <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
                      movie.poster_path
                    }`}
                    alt=""
                  />
                </Grid>
                <Grid item xs={8} className="imgCard">
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.original_title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="p">
                    {movie.budget}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        )}
      </MovieContainer>
    );
  }
}

Movie.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movie: makeSelectMovie(),
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

const withReducer = injectReducer({ key: 'movie', reducer });
const withSaga = injectSaga({ key: 'movie', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Movie);
