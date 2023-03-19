const intialState = [{
  name: 'Isabella',
  temparature: '27º',
}];

const FAHRENHEIT = 'FAHRENHEIT';
const CELSIOUS = 'CELSIOUS';

const fahrenheit = (temp) => (dispatch) => {
  dispatch({ type: FAHRENHEIT, temp });
};

const celsius = (temp) => (dispatch) => {
  dispatch({ type: CELSIOUS, temp });
};
/* eslint-disable-next-line no-use-before-define, default-param-last */
const weatherReducer = (state = intialState, action) => {
  switch (action.type) {
    case FAHRENHEIT:
      return state;
    default:
      return state;
  }
};

export default weatherReducer;
export {
  fahrenheit, celsius,
};
