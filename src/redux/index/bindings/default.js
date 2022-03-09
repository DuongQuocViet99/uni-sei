import { connect } from "react-redux";
import { reduxActDefProj } from "redux/index/action"; 
import view from "pages/index/view";

const mapState = state => ({ 
  state: state.reducerIndex.items 
});
const mapAction = { 
  reduxActDefProj 
};

export default connect( mapState, mapAction )( view );