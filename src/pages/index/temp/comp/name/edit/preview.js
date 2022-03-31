import { EditablePreview } from "@chakra-ui/react";
import HeadingS from "components/Heading";

export default function Preview() {
  return (
    <>
      <HeadingS 
        size='md' 
        letterSpacing="wide"
      >
        <EditablePreview 
          p={ 0 }
          isTruncated 
          maxW='100px'
        />
      </HeadingS>
    </>
  );
}