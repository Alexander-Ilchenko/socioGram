import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  changeNewMesaageTextActionCreator,
} from "../../../redux/redux-store";
import DialogPageAlex777 from "./DialogPageAlex777";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    changeNewMesaageText: (text) => {
      dispatch(changeNewMesaageTextActionCreator(text));
    },
  };
};
const DialogPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogPageAlex777);
export default DialogPageContainer;
