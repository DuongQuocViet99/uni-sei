import { connect } from "react-redux";
import { reduxActDelProj } from "redux/index/action"; 
import lst from "pages/index/temp/comp/action/comp/lst";

const mapState = state => ({ 
  state: state.reducerIndex.items 
});
const mapAction = { 
  reduxActDelProj 
};

export default connect( mapState, mapAction )( lst );