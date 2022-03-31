import { connect } from "react-redux";
import { reduxActRenProj } from "redux/index/action"; 
import name from "pages/index/temp/comp/name/name";

const mapState = state => ({ 
  state: state.reducerIndex.items 
});
const mapAction = { 
  reduxActRenProj 
};

export default connect( mapState, mapAction )( name );