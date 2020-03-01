const initialState = {
  data1: 1
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return state
    default:
      return state
  }
}
