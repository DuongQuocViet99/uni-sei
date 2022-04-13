import { FiCheck, FiEdit2, FiMoreHorizontal, FiTrash2, FiX } from "react-icons/fi";
import * as C from "@chakra-ui/react";
import { IBtnPopover, IBtnPopoverItem } from "components/IconButton";
import AlertDialogDel from "redux/index/bindings/del";
import { DividerPopover } from "components/Divider";
import { HStack } from "@chakra-ui/react";

export default function Option({ project, index }) {
  const { isOpen, onOpen, onClose } = C.useDisclosure();
  const { 
    getSubmitButtonProps: getSubmit, 
    getCancelButtonProps: getCancel, 
    getEditButtonProps: getEdit, 
    isEditing
  } = C.useEditableControls();

  return (
    <>
      <C.Popover
        placement='bottom-end' 
        closeOnBlur={ false }
      >
        {({ onClose }) => (
          <>
            <C.PopoverTrigger>
              <C.Box>
                <IBtnPopover icon={ <FiMoreHorizontal /> } />
              </C.Box>
            </C.PopoverTrigger>
            <C.PopoverContent
              w='auto'
              bg='#4B4B4B'
              rounded='sm'
              border='none'
              _focus={{ outline: 'none' }}
            >
              <C.PopoverHeader 
                p={ 1 }
                border='none' 
              >
                <HStack>
                  { isEditing ?
                    <>
                      <HStack>
                        <IBtnPopoverItem 
                          icon={ <FiCheck /> } 
                          editable={ getSubmit() } 
                        />
                        <DividerPopover />
                        <IBtnPopoverItem 
                          icon={ <FiX /> } 
                          editable={ getCancel() }
                        />
                      </HStack>
                    </>
                    :
                    <>
                      <IBtnPopoverItem icon={ <FiEdit2 /> } editable={ getEdit() }/>
                      <DividerPopover />
                      <IBtnPopoverItem icon={ <FiTrash2 /> } onClick={ onOpen }/>
                      <DividerPopover />
                      <IBtnPopoverItem icon={ <FiX /> } onClick={ onClose }/>
                    </>
                  }
                </HStack>
              </C.PopoverHeader>
            </C.PopoverContent>
          </>
        )}
      </C.Popover>

      <AlertDialogDel
        isOpen={ isOpen } 
        onClose={ onClose }
        project={ project }
        index={ index } 
      />
    </>
  );
}