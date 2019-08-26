import { connect } from 'react-redux'
import Result from './component';

const mapStateToProps = (state) => ({
    repoList: state.repoList
});

export default connect(mapStateToProps)(Result);
