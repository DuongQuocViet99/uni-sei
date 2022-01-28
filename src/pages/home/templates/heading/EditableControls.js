import { useEditableControls } from "@chakra-ui/react";
import { FiCheck, FiEdit3, FiX } from "react-icons/fi";
import IconButton from "components/IconButton";

export default function EditableControls() {
  const { 
    isEditing, 
    getSubmitButtonProps, 
    getCancelButtonProps, 
    getEditButtonProps 
  } = useEditableControls()

  return isEditing 
  ? (
      <>
        <IconButton 
          opacity='0.5'
          icon={ <FiCheck /> } 
          size='sm'  
          editable={ getSubmitButtonProps() } 
        />
        <IconButton 
          opacity='0.5'
          icon={ <FiX /> } 
          size='sm'  
          editable={ getCancelButtonProps() } 
        />
      </>
    ) 
  : (
      <>
        <IconButton 
          opacity='0.5'
          rounded='xl'
          icon={ <FiEdit3 /> } 
          size='sm'  
          editable={ getEditButtonProps() } 
        />
      </>
    )
}