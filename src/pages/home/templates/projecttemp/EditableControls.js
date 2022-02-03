import { useEditableControls } from "@chakra-ui/react";
import { FiCheck, FiEdit3, FiX } from "react-icons/fi";
import IconButtonSC from "components/IconButton";

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
        <IconButtonSC 
          opacity='0.6'
          size='sm'  
          icon={ <FiCheck /> } 
          editable={ getSubmitButtonProps() } 
        />
        <IconButtonSC 
          opacity='0.6'
          size='sm'  
          icon={ <FiX /> } 
          editable={ getCancelButtonProps() } 
        />
      </>
    ) 
  : (
      <>
        <IconButtonSC 
          opacity='0.6'
          size='sm'  
          icon={ <FiEdit3 /> } 
          editable={ getEditButtonProps() } 
        />
      </>
    )
}