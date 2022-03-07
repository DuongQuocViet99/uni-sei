import { EditableInput } from "@chakra-ui/react";

export default function Input() {
  return (
    <>
      <EditableInput 
        rounded='none'
        _focus={{ outline: 'none' }} 
        borderBottom='2px solid #343434'  
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