import { httpRenameProj } from "http/http";

const renamed = store => next => action => {
  if ( action.type === 'RENAME' ) {
    httpRenameProj( action.payload.projectid, action.payload.name );
  }
  return next( action );
}

export default renamed;