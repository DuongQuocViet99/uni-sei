import { EditableInput } from "@chakra-ui/react";

export default function EditInput() {
  return (
    <>
      <EditableInput 
        p={ 0 }
        border='2px'
        zIndex={ 1 }
        rounded='sm'
        fontSize='lg'
        color='sei.gray'
        fontWeight='black'
        fontFamily='Quicksand'
        borderColor='sei.gray'  
        _focus={{ outline: 'none' }} 
        onKeyDown={ e => {
          if ( e.key === 'Enter' ) {
            e.preventDefault();
            return false;
          }
          return true;
        }}
      />
    </>
  );
}