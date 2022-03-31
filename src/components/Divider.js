import { Divider } from "@chakra-ui/react";

export default function DividerS( props ) {
  return (
    <Divider 
      borderColor='rgba(109, 104, 117, 0.4)' 
      { ...props } 
    />
  );
}

export function DSPopover( props ) {
  return (
    <Divider 
      h='14px' 
      orientation='vertical' 
      borderColor='rgba(243, 219, 206, 0.4)' 
    />
  );
}