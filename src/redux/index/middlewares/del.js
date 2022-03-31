import { httpDelProj } from "http/http";

const del = store => next => action => {
  if ( action.type === 'DELETE' ) {
    httpDelProj( action.payload.projectid );
  }
  return next( action );
}

export default del;