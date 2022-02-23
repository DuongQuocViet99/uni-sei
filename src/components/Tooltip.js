import { Tooltip } from "@chakra-ui/react";

export default function TooltipSC( props ) {
  return (
    <>
      <Tooltip 
        fontFamily='Quicksand' 
        fontWeight='black'
        bg='sei.gray'
        color='sei.yellow'
        hasArrow 
        { ...props }
      >
        { props.children }
      </Tooltip>
    </>
  );
}