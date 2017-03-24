import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShot } from '../actions';
import { fetchShotAPI } from '../utils';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ shot, isLoading, isError }) => ({
  shot,
  isLoading,
  isError
});

const mapDispatchToProps = dispatch => ({
  fetchShot: id => dispatch(fetchShotAPI(id)),
  resetShot: () => dispatch(fetchShot({}))
});

class SingleShot extends Component {
  componentDidMount () {
    const { match } = this.props;
    const id = match.url.match(/[0-9]+/)[0];
    this.props.fetchShot(id);
    document.body.classList.add('modal-open');
  }

  componentWillUnmount () {
    this.props.resetShot();
    document.body.classList.remove('modal-open');
  }

  closeModal (e) {
    const el = e.target.classList.contains('card-modal');
    if (!el) return false;
    return this.props.history.push('/');
  }

  render () {
    const { shot } = this.props;
    const bg = {backgroundImage: `url(${!!shot.images ? (shot.images.hidpi || shot.images.normal) : null})`};
    return (
      <div className="card-modal" onClick={this.closeModal.bind(this)}>
        <Link className="card__close" to="/"><i className="glyphicon glyphicon-remove"></i></Link>
        <div className="col-md-offset-2 col-md-8">
          <div className="card clearfix">
            <div className="card__img-holder">
              <img style={bg} alt="" className="card__img card__img--bg img-responsive" />
              <p className="card__title"><strong>{shot.title}</strong></p>
              <div dangerouslySetInnerHTML={{__html: shot.description}} />
            </div>
            <div className="card__group">
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
              {!!shot.user ?
                <span>
                  <img src={shot.user.avatar_url} alt={shot.user.name} className="img-circle card__photo--lg" />
                  {' '}
                  {shot.user.name}
                </span>
              : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShot);
