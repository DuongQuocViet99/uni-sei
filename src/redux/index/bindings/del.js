import { connect } from "react-redux";
import { reduxActDelProj } from "redux/index/action"; 
import AlertDialogDel from "pages/index/temp/comp/options/comp/alert";

const mapState = state => ({ 
  state: state.reducerIndex.items 
});
const mapAction = { 
  reduxActDelProj 
};

export default connect( mapState, mapAction )( AlertDialogDel );