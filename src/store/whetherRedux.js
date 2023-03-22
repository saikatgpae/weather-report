const intialState = [{
  name: 'Isabella',
  location: 'New York, USA',
  temparature: 27.00,
  humidity: 82,
  rain: 42,
  uv: 4,
  precipitation: 1.4,
  wind: 8,
}];

const FAHRENHEIT = 'FAHRENHEIT';
const CELSIOUS = 'CELSIOUS';

const fahrenheit = (temparature) => (dispatch) => {
  dispatch({ type: FAHRENHEIT, temparature });
};

const celsius = (temparature) => (dispatch) => {
  dispatch({ type: CELSIOUS, temparature });
};
/* eslint-disable-next-line no-use-before-define, default-param-last */
const weatherReducer = (state = intialState, action) => {
  switch (action.type) {
    case FAHRENHEIT:
      return [{
        ...state[0], ...action,
      }];
    case CELSIOUS:
      return [{
        ...state[0], ...action,
      }];
    default:
      return state;
  }
};

export default weatherReducer;
export {
  fahrenheit, celsius,
};
