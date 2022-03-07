import { Checkbox } from "@chakra-ui/react";

export default function CheckboxS( props ) {
  return (
    <>
      <Checkbox 
        size='lg'
        rounded='sm'
        borderColor='sei.gray'
        { ...props }
      />
    </>
  );
}