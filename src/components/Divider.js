import { Divider } from "@chakra-ui/react";

export default function DividerOrigin( props ) {
  return (
    <Divider 
      borderColor='rgba(109, 104, 117, 0.6)' 
      { ...props } 
    />
  );
}

export function DividerPopover( props ) {
  return (
    <Divider 
      h='14px' 
      orientation='vertical' 
      borderColor='rgba(154, 140, 152, 0.6)' 
    />
  );
}