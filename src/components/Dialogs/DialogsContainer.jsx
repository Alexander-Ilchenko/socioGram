import { connect } from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    state: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
