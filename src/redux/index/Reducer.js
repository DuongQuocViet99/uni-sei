export default function reducerForindex( state = { items: [] }, action ) {
  switch ( action.type ) {
    case 'DEFAULT_STATE':
      return { 
        items: action.payload 
      }
    case 'CHANGE_STATUS':
      state.items[ state.items.indexOf(action.payload.index) ].anchor = action.payload.status
      return {
        items: [ ...state.items ]
      }
    default:
      return state;
  }
}
