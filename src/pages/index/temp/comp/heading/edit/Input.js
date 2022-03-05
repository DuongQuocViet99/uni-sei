import { EditableInput } from "@chakra-ui/react";

export default function Input() {
  return (
    <>
      <EditableInput 
        onKeyDown={ e => {
          if ( e.key === 'Enter' ) {
            e.preventDefault()
            return false
          }
          return true
        }}
        rounded='none'
        borderBottom='2px solid #343434'  
        _focus={{ outline: 'none' }} 
      />
    </>
  );
}