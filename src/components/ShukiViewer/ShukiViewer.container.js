import { connect } from 'react-redux';
import ShukiViewer from './ShukiViewer';

const mapStateToProps = (state) => {
  return {
    shukiList: state.shuki
  }
}

const ShukiViewerContainer = connect(mapStateToProps, {})(ShukiViewer);

export default ShukiViewerContainer;