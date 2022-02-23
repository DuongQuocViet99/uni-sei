import axios from "axios";

export default function httpDelProj( projectid ) {
  axios({
    method: 'DELETE', 
    url: `http://localhost:3001/project/${ projectid }/delete` 
  })
}