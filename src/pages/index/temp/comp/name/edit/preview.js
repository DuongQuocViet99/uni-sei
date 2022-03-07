import { EditablePreview } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Preview({ project }) {
  return (
    <>
      <Link to={`/${ project.projectid }/task`}>
        <EditablePreview 
          p={ 0 }
          isTruncated 
          maxW='100px'  
          rounded='none'
          cursor='default' 
          _hover={{ borderBottom: '2px solid #343434' }} 
        />
      </Link>
    </>
  );
}