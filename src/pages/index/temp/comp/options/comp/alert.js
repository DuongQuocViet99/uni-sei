import * as C from "@chakra-ui/react";
import { useRef } from "react";
import { BTSDel, BTSCancel } from "components/Button";

export default function AlertDialogDel({ isOpen, onClose, index, project, reduxActDelProj }) {
  const cancelRef = useRef();

  const delProj = () => {
    reduxActDelProj( index, project.projectid );
  }

  return (
    <>
      <C.AlertDialog
        isOpen={ isOpen }
        onClose={ onClose }
        motionPreset='slideInBottom'
        leastDestructiveRef={ cancelRef }
      >
        <C.AlertDialogOverlay>
          <C.AlertDialogContent
            rounded='sm'
            color='sei.gray'
            boxShadow='none'
            fontFamily='Quicksand'
          >
            <C.AlertDialogHeader>
              Delete Project
            </C.AlertDialogHeader>
            <C.AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </C.AlertDialogBody>
            <C.AlertDialogFooter> 
              <C.HStack>
                <BTSCancel
                  ref={ cancelRef }
                  onClick={ onClose }
                >
                  Cancel
                </BTSCancel>
                <BTSDel onClick={() => delProj()}> 
                  Delete 
                </BTSDel>
              </C.HStack>
            </C.AlertDialogFooter>
          </C.AlertDialogContent>
        </C.AlertDialogOverlay>
      </C.AlertDialog>
    </>
  );
}