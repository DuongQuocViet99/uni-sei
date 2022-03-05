import { Tooltip } from "@chakra-ui/react";

export default function TooltipS( props ) {
  return (
    <>
      <Tooltip 
        fontFamily='Quicksand' 
        fontWeight='black'
        color='sei.yellow'
        bg='sei.gray'
        hasArrow 
        { ...props }
      >
        { props.children }
      </Tooltip>
    </>
  );
}