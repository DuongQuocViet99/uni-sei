import { connect } from "react-redux";
import { reduxActRename } from "redux/index/Action"; 
import Heading from "pages/index/temp/project_temp/heading/Heading";

const mapState = state => ({ state: state.reducerForindex.items });
const mapAction = { reduxActRename };

export default connect( mapState, mapAction )( Heading );