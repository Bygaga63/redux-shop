import Filter from '../components/Filter';
import {connect} from 'react-redux';
import * as filterActions from '../actions/filter';
import {bindActionCreators} from 'redux';


const mapStatToProps = ({ books, filter })=> ({
    filterBy: books.filterBy,

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
});


export default connect(mapStatToProps, mapDispatchToProps)(Filter);