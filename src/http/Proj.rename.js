import axios from "axios";

export default function httpRenameProj( projectid, name ) {
  axios({
    method: 'PUT', 
    url: `http://localhost:3001/project/${ projectid }/rename`, 
    data: { name } 
  })
}