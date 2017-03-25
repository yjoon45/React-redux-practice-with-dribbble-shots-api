import { connect } from 'react-redux';
import { fetchShotsAPI } from '../utils';
import { fetchShot } from '../actions';

import App from '../components/App';

const mapStateToProps = ({ shots, isLoading, isError }) => ({
  shots, isLoading, isError
});

const mapDispatchToProps = dispatch => ({
  fetchShots: (q = '') => dispatch(fetchShotsAPI(q))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
