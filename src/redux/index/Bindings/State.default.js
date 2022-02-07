import { connect } from "react-redux";
import { reduxActdefaultState } from "redux/index/Action"; 
import View from "pages/index/View";

const mapState = state => ({ state: state.reducerForindex.items });
const mapAction = { reduxActdefaultState };

export default connect( mapState, mapAction )( View );