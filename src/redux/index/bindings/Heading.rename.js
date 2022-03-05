import { connect } from "react-redux";
import { reduxActRename } from "redux/index/Action"; 
import Heading from "pages/index/temp/comp/heading/Heading";

const mapState = state => ({ state: state.reducerForindex.items });
const mapAction = { reduxActRename };

export default connect( mapState, mapAction )( Heading );