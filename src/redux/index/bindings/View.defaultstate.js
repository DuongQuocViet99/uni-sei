import { connect } from "react-redux";
import { reduxActDefaultState } from "redux/index/Action"; 
import View from "pages/index/View";

const mapState = state => ({ state: state.reducerForindex.items });
const mapAction = { reduxActDefaultState };

export default connect( mapState, mapAction )( View );