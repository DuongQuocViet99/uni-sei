import { FiCheck, FiEdit2, FiMoreHorizontal, FiTrash2, FiX } from "react-icons/fi";
import * as C from "@chakra-ui/react";
import { IBSPopoverBtn, IBSPopoverItem } from "components/IconButton";
import AlertDialogDel from "redux/index/bindings/del";
import { DSPopover } from "components/Divider";
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
                <IBSPopoverBtn icon={ <FiMoreHorizontal /> } />
              </C.Box>
            </C.PopoverTrigger>
            <C.PopoverContent
              w='auto'
              rounded='sm'
              bg='sei.gray'
              border='none'
              fontFamily='Quicksand'
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
                        <IBSPopoverItem 
                          icon={ <FiCheck /> } 
                          editable={ getSubmit() } 
                        />
                        <DSPopover />
                        <IBSPopoverItem 
                          icon={ <FiX /> } 
                          editable={ getCancel() }

                        />
                      </HStack>
                    </>
                    :
                    <>
                      <IBSPopoverItem icon={ <FiEdit2 /> } editable={ getEdit() }/>
                      <DSPopover />
                      <IBSPopoverItem icon={ <FiTrash2 /> } onClick={ onOpen }/>
                      <DSPopover />
                      <IBSPopoverItem icon={ <FiX /> } onClick={ onClose }/>
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