import { Editable, EditableInput, EditablePreview, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditableControls from "pages/home/templates/projecttemp/EditableControls";

export default function EditableHeading({ data }) {
  return (
    <>
      <Editable 
        defaultValue={ data.name } 
        isPreviewFocusable={ false } 
        onSubmit={ v => 
          axios({ 
            method: 'PUT', 
            url: 'http://localhost:3001/project', 
            data: { projectid: data.projectid, value: v } 
          }) 
        }
      >
        <HStack spacing={ 0 }>
          <Link to={`/${ data.projectid }`}>
            <EditablePreview 
              isTruncated 
              maxW='120px'  
              cursor='default' 
              rounded='none'
              p={ 0 }
              _hover={{ borderBottom: '2px solid #343434' }} 
            />
          </Link>
          <HStack>
            <EditableInput 
              rounded='none'
              borderBottom='2px solid #343434'  
              _focus={{ outline: 'none' }} 
            />
            <EditableControls />
          </HStack>
        </HStack>
      </Editable>
    </>
  );
}