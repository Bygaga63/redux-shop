import {connect} from 'react-redux';
import * as cartActions from '../actions/cart';
import {bindActionCreators} from 'redux';
import {MenuComponent} from '../components/Menu'

const mapStatToProps = ({ cart })=> ({
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});


export default connect(mapStatToProps, mapDispatchToProps)(MenuComponent);