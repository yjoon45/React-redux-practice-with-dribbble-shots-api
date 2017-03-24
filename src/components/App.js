import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShotsAPI } from '../utils';
import { fetchShot } from '../actions';
import Shot from './Shot';
import FilterShots from './FilterShots';

const mapStateToProps = ({ shots, isLoading, isError }) => ({ shots, isLoading, isError });

const mapDispatchToProps = dispatch => ({
  fetchShots: (q = '') => dispatch(fetchShotsAPI(q))
});

class App extends Component {
  componentDidMount () {
    const { location, shots, fetchShots } = this.props;
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort');
    !shots.length && sort ? fetchShots(`sort=${sort}`) : fetchShots();
  }
  
  render () {
    const { shots, isLoading, isError } = this.props;
    const params = new URLSearchParams(this.props.location.search);
    const sort = params.get('sort');
    let loading = '';
    if (isLoading || !shots.length) loading = <p className="lead text-center">Loading...</p>;
    if (isError) loading = <p className="lead text-center">Something went wrong!</p>;
    
    return (
      <div className="container-fluid card-wrapper">
        <FilterShots />
        <div className="row">
          {shots.map((shot, i) => <Shot key={i} shot={shot} />)}
        </div>
        {loading}
        {shots.length && !isLoading ?
          <button className="btn center-block btn-primary" onClick={this.props.fetchShots.bind(this, `sort=${sort}`)}>Load more</button>
        : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
