import React, {PropTypes} from 'react';

const ShukiCreator = ({onClick}) => {

  let input;
  return (
    <div>
      <input ref={node => input = node}/>
      <button onClick={() => {
        onClick(input.value);
        input.value = '';}
      }> This is Shuki Creator</button>
    </div>
  );
}

ShukiCreator.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ShukiCreator