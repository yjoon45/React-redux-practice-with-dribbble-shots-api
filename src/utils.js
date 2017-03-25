import axios from 'axios';
import { fetchShots, fetchShot, fetchingShots, fetchingShotsError, fetchShotsReset } from './actions';

let inc = 0;
let dquery = '';
const token = '1a556a2c3586c9617af18338ce160d80131bcbfceb9949ed37a29bbbac784813';

function requestShots (dispatch, url, isSingle = false) {
  dispatch(fetchingShots(true));
  axios.get(url)
    .then(response => {
      if (!isSingle) {
        dispatch(fetchShots(response.data));
      } else {
        dispatch(fetchShot(response.data));
      }
      dispatch(fetchingShots(false));
    })
    .catch(err => {
      dispatch(fetchingShotsError(true));
      dispatch(fetchingShots(false));
    });
}

export function fetchShotsAPI (q = '') {
  inc++;
  let query = q.length ? q : dquery;
  const url = `https://api.dribbble.com/v1/shots?${query}&page=${inc}&access_token=${token}`;
  return dispatch => requestShots(dispatch, url);
}

export function fetchShotAPI (id) {
  const url = `https://api.dribbble.com/v1/shots/${id}?access_token=${token}`;
  return dispatch => requestShots(dispatch, url, true);
}

export function fetchShotsByQueryAPI (q) {
  inc = 1;
  dquery = `sort=${q}`;
  const url = `https://api.dribbble.com/v1/shots?${dquery}&access_token=${token}`;
  return dispatch => {
    dispatch(fetchShotsReset());
    requestShots(dispatch, url);
  };
}
