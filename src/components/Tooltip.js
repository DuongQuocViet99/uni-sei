import { Tooltip } from "@chakra-ui/react";

export default function TooltipSC( props ) {
  return (
    <>
      <Tooltip 
        fontFamily='Quicksand' 
        fontWeight='black'
        bg='#b5838d'
        hasArrow 
        { ...props }
      >
        { props.children }
      </Tooltip>
    </>
  );
}