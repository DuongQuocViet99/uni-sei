import { httpDelProj } from "http/http";

const deleted = store => next => action => {
  if ( action.type === 'DELETE' ) {
    httpDelProj( action.payload.projectid );
  }
  return next( action );
}

export default deleted;