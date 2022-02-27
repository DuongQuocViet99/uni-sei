import httpRenameProj from "http/Proj.rename";

const renamed = store => next => action => {
  if ( action.type === 'RENAME' ) {
    httpRenameProj( action.payload.projectid, action.payload.name );
  }
  return next( action );
}

export default renamed;