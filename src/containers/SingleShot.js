import { connect } from 'react-redux';
import { fetchShot } from '../actions';
import { fetchShotAPI } from '../utils';
import SingleShot from '../components/SingleShot';

const mapStateToProps = ({ shot, isLoading, isError }) => ({
  shot,
  isLoading,
  isError
});

const mapDispatchToProps = dispatch => ({
  fetchShot: id => dispatch(fetchShotAPI(id)),
  resetShot: () => dispatch(fetchShot({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleShot);
