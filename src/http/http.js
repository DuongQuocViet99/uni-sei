import axios from "axios";

export function httpDelProj( projectid ) {
  axios({
    method: 'DELETE', 
    url: `http://localhost:3001/project/${ projectid }/delete` 
  });
}

export function httpRenameProj( projectid, name ) {
  axios({
    method: 'PUT', 
    url: `http://localhost:3001/project/${ projectid }/rename`, 
    data: { name } 
  });
}

export function httpNewProc( procName, procColor, projectid ) {
  axios({
    method: 'POST', 
    url: `http://localhost:3001/process/add`,
    data: { procName, procColor, projectid } 
  });
}
