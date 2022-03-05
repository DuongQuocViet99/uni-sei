import { Box, Circle, useBoolean } from "@chakra-ui/react";

export default function SwitchS() {
  const [ bool, setBool ] = useBoolean( false );
  
  return (
    <>
      <Box
        bg={ bool ? 'sei.red' : '#cfcdd2' } 
        onClick={ setBool.toggle }
        rounded='full' 
        p={ 0.5 } 
        w='34px'
      >
        <Circle 
          transition='all 0.2s ease-in-out'
          ml= { bool ? '14px': '0px' }
          size='16px' 
          bg='white' 
        />
      </Box>
    </>
  );
}