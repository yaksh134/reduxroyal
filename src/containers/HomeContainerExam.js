import { connect } from "react-redux";
import { HomeComponentExam } from "../components/HomeComponentExam";
import { addToCartExam } from "../services/actions/Action";

const mapStateToProps = state =>({
    cartData : state
})

const mapDispatchToProps = dispatch =>({
    addToCartHandlerExam:product=>dispatch(addToCartExam(product))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponentExam);