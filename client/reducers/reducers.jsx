import { combineReducers } from 'redux';

// Reducers
import testReducer from './testReducer.jsx';
// import userReducer from './user-reducer';
// import widgetReducer from './widget-reducer';
// import searchLayoutReducer from './search-layout-reducer';

const userInitState = {
  isLoggedIn: false,
  userName: '',
  userEmail: '',
  userPhotos: []
};

const imgInitState = {
  file: '',
  imgThumb: '',
  imgStack: []
};

// The User Reducer
const userReducer = function(state = userInitState, action) {
  //console.log('reducer', action.hasAuth);
  switch (action.type) {
  case 'USER_AUTH':
    return { ...state, isLoggedIn: action.hasAuth };
  case 'USER_NAME':
    return { ...state, userName: action.userName };
  case 'USER_EMAIL':
    return { ...state, userEmail: action.userEmail };
  case 'USER_PHOTOS':
    return { ...state, userPhotos: action.userPhotos };
  }
  return state;
};

const imgReducer = function(state = imgInitState, action) {
  //console.log('reducer', action.hasAuth);
  switch (action.type) {
  case 'IMG_FILE':
    //return Object.assign({}, state, { users: action.users });
    return { ...state, file: action.file };
  case 'IMG_THUMB':
    return { ...state, imgThumb: action.imgThumb };
  case 'IMG_STACK':
    return { ...state, imgStack: action.imgStack };
  }
  return state;
};

// The Widget Reducer
// const widgetReducer = function(state = {}, action) {
//   return state;
// };


// Combine Reducers
var reducers = combineReducers({
  testState: testReducer,
  userState: userReducer,
  imgState: imgReducer
  // widgetState: widgetReducer,
  // searchLayoutState: searchLayoutReducer
});

export default reducers;