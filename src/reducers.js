export const shot = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SHOT': {
      return action.payload;
    }
    default: return state;
  }
}

export const shots = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SHOTS': {
      return state.concat(action.payload);
    }
    case 'FETCH_SHOTS_RESET': {
      return [];
    }
    default: return state;
  }
}

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_SHOTS_FECHTING': {
      return action.payload;
    }
    default: return state;
  }
}

export const isError = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_SHOTS_ERROR': {
      return action.payload;
    }
    default: return state;
  }
}
