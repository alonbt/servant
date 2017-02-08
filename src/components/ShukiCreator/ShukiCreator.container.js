import { connect } from 'react-redux';
import ShukiCreator from './ShukiCreator';
import {createShuki} from '../../actions';

const mapStateToProps = () => {
  return {
    // active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      dispatch(createShuki(text))
    }
  }
}

const ShukiCreatorContainer = connect(mapStateToProps, mapDispatchToProps)(ShukiCreator);

export default ShukiCreatorContainer;