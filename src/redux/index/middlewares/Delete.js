import httpDelProj from "http/Proj.del";

const deleted = store => next => action => {
  if ( action.type === 'DELETE' ) {
    httpDelProj( action.payload.projectid );
  }
  return next( action );
}

export default deleted;