export default function reducerForindex( state = { items: [] }, action ) {
  switch ( action.type ) {
    case 'DEFAULT_STATE':
      return { 
        items: action.payload 
      }
    case 'DELETE':
      state.items = [ 
        ...state.items.slice( 0, action.payload.index ), 
        ...state.items.slice( action.payload.index + 1 )
      ]
      return { 
        items: [ ...state.items ] 
      }
    case 'RENAME':
      state.items[ action.payload.index ].name = action.payload.name
      return {
        items: [ ...state.items ]
      }
    default:
      return state;
  }
}
