import { Editable } from "@chakra-ui/react";

export default function EditableS( props ) {
  return (
    <>
      <Editable
        isPreviewFocusable={ false } 
        submitOnBlur={ false }
        { ...props }
      >
        { props.children }
      </Editable>
    </>
  )
}