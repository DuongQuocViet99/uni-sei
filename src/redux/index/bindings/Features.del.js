import { connect } from "react-redux";
import { reduxActDeleteProject } from "redux/index/Action"; 
import Features from "pages/index/temp/comp/features/feature_temp/Features.lst";

const mapState = state => ({ state: state.reducerForindex.items });
const mapAction = { reduxActDeleteProject };

export default connect( mapState, mapAction )( Features );