import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Shot extends Component {
  render () {
    const { shot } = this.props;
    const html_url = shot.html_url.replace('https://dribbble.com/shots/', '');
    return (
      <div className="col-md-3">
        <Link to={`/shots/${html_url}`} className="card clearfix">
          <div className="card__img-holder">
            <img src={shot.images.normal} alt="" className="card__img img-responsive" />
            <div className="card__img-desc">
              <p className="card__title"><strong>{shot.title}</strong></p>
              {shot.description && this.stripTags(shot.description).substr(0, 148) + '...'}
            </div>
          </div>
          <div className="card__group text-right">
            <div className="card__group-item">
              <i aria-hidden="true" className="glyphicon glyphicon-eye-open"></i> {shot.views_count}
            </div>
            <div className="card__group-item">
              <i aria-hidden="true" className="glyphicon glyphicon-comment"></i> {shot.comments_count}
            </div>
            <div className="card__group-item">
              <i aria-hidden="true" className="glyphicon glyphicon-heart"></i> {shot.likes_count}
            </div>
          </div>
          <div className="card__userinfo">
            <img src={shot.user.avatar_url} alt={shot.user.name} className="img-circle card__photo" /> {shot.user.name}
          </div>
        </Link>
      </div>
    );
  }
  
  stripTags (html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.innerText || '';
  }
}
