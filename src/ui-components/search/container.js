import { connect } from 'react-redux';
import { searchRepo } from '../../actions/thunks/search-repo'
import SearchBox from './component';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
    searchRepo
})(SearchBox);
