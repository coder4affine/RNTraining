import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignInScreen from './signInScreen';

function mapStateToProps(state) {
  return {
    property: state.property,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(PropertiesActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen);
