
import { connect } from 'react-redux';
import Login from './Login';
import {user} from '../../actions/user-actions-types'
function mapStateToProps(state) {
 return{
     userstore:state.user,
 }
};
const mapDispatchToProps = {
    user
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);