import { Button } from "@chakra-ui/react";

export default function ButtonS( props ) {
  const { type } = props;

  return (
    <>
      <Button
        _active={{ 
          borderColor: type === 'delete' ? 'sei.red' : 'sei.gray',
          bg: type === 'delete' ? 'sei.red' : 'sei.gray', 
          color: 'white'
        }}
        _hover={{ 
          borderColor: type === 'delete' ? 'sei.red' : 'sei.gray',
          bg: type === 'delete' ? 'sei.red' : 'sei.gray', 
          color: 'white'
        }}
        _focus={{ outline: 'none' }}
        borderColor='sei.gray'
        fontFamily='Quicksand'
        variant='outline'
        cursor='default'
        border='2px'
        rounded='sm'
        { ...props }
      >
        { props.children }
      </Button>
    </>
  );
}