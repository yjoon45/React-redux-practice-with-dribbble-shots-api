import { connect } from 'react-redux';
import { fetchShotsByQueryAPI } from '../utils';
import FilterShots from '../components/FilterShots';

const mapStateToProps = ({ router: { location } }) => ({ location });

const mapDispatchToProps = dispatch => ({
  sortShots: q => dispatch(fetchShotsByQueryAPI(q))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterShots);
