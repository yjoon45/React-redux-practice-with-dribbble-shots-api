export const fetchShots = payload => ({type: 'FETCH_SHOTS', payload});
export const fetchingShots = payload => ({type: 'FETCH_SHOTS_FECHTING', payload});
export const fetchingShotsError = payload => ({type: 'FETCH_SHOTS_ERROR', payload});
export const fetchShotsReset = () => ({type: 'FETCH_SHOTS_RESET'});

export const fetchShot = payload => ({type: 'FETCH_SHOT', payload});
