import { connect } from "react-redux";
import { reduxActchangeStatus } from "redux/index/Action"; 
import FeatureLst from "pages/index/temp/project_temp/features/feature_temp/Features.lst";

const mapState = state => ({ state: state.reducerForindex.items });
const mapAction = { reduxActchangeStatus };

export default connect( mapState, mapAction )( FeatureLst );