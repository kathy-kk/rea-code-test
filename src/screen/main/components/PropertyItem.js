import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToSaved, removeFromSaved } from '../../../store/properties/actions'

class PropertyItem extends React.Component {

  render() {
    const { id, onClick, isAdd } = this.props;
    return (<div>
      <h1>{id}</h1>
      <button onClick = {() => { onClick(id) }}>{isAdd? 'Add': 'Delete'}</button>
    </div>)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
     return ownProps.isAdd? { onClick: id => dispatch(addToSaved(id))} : { onClick: id => dispatch(removeFromSaved(id)) }
}

PropertyItem.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isAdd: PropTypes.bool.isRequired
};

export default PropertyItem

export const ConnectedPropertyItem = connect(null, mapDispatchToProps)(PropertyItem)