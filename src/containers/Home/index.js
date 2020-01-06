
import { connect } from 'react-redux';
import Home from './Home';
import {dashboard} from '../../actions/DashBoard-actions-types copy';

function mapStateToProps(state) {
 return{
  DashBoardDetails:state.dashboard,
 }
};
const mapDispatchToProps = {
    dashboard
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);