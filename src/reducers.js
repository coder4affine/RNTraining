import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Navigator from './navigation';
import login from './screens/SignInScreen/signInReducer';

const navReducer = createNavigationReducer(Navigator);

const rootReducer = combineReducers({
  nav: navReducer,
  login,
});

export default rootReducer;
