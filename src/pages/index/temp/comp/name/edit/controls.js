import { useEditableControls } from "@chakra-ui/react";
import { FiCheck, FiEdit2, FiX } from "react-icons/fi";
import IconButtonS from "components/IconButton";

export default function Controls() {
  const { 
    getSubmitButtonProps, 
    getCancelButtonProps, 
    getEditButtonProps, 
    isEditing
  } = useEditableControls();

  return isEditing 
  ? (
      <>
        <IconButtonS 
          size='sm'
          fontSize='md'  
          opacity='0.6'
          icon={ <FiCheck /> } 
          editable={ getSubmitButtonProps() } 
        />
        <IconButtonS 
          size='sm'  
          fontSize='md'  
          opacity='0.6'
          icon={ <FiX /> } 
          editable={ getCancelButtonProps() } 
        />
      </>
    ) 
  : (
      <>
        <IconButtonS 
          size='sm'
          fontSize='md'  
          opacity='0.6'
          icon={ <FiEdit2 /> } 
          editable={ getEditButtonProps() } 
        />
      </>
    )
}