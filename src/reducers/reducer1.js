const initialState = {
  data1: 1
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'Add':
      let data1 = state.data1
      return Object.assign({}, state, {data1: data1 + 1})
    default:
      return state
  }
}
