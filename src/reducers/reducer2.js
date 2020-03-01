const initialState = {
  data2: 1
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'MUL':
      return state
    default:
      return state
  }
}
