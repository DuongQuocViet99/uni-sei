import { EditablePreview } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Preview({ project }) {
  return (
    <>
      <Link to={`/${ project.projectid }/task`}>
        <EditablePreview 
          isTruncated 
          maxW='120px'  
          cursor='default' 
          rounded='none'
          p={ 0 }
          _hover={{ borderBottom: '2px solid #343434' }} 
        />
      </Link>
    </>
  );
}