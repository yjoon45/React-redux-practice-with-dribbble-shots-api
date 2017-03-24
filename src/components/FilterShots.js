import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchShotsByQueryAPI } from '../utils';

const mapStateToProps = ({ router: { location } }) => ({ location });

const mapDispatchToProps = dispatch => ({
  sortShots: q => dispatch(fetchShotsByQueryAPI(q))
});

const FilterShots = ({ sortShots, location}) => {
  const params = new URLSearchParams(location.search);
  const filters = [
    {key: '', name: 'Popular'},
    {key: 'recent', name: 'Most recent'},
    {key: 'views', name: 'Most viewed'},
    {key: 'comments', name: 'Most commented'},
  ];
  const current = filters.find(f => f.key == params.get('sort'));
  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">Dribbble Shots</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="dropdown">
          <a>{current ? current.name : 'Popular'} <span className="caret"></span></a>
          <ul className="dropdown-menu">
            {filters.map((f, i) => 
              f.key != params.get('sort') && <li key={i}><Link onClick={sortShots.bind(this, f.key)} to={`/shots?sort=${f.key}`}>{f.name}</Link></li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterShots);
