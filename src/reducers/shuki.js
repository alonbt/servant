const shuki = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHUKI':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default shuki