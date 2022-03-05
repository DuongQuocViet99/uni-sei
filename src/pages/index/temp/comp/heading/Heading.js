import { HStack, useBoolean, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Controls from "pages/index/temp/comp/heading/edit/Controls";
import Preview from "pages/index/temp/comp/heading/edit/Preview";
import Input from "pages/index/temp/comp/heading/edit/Input";
import EditableS from "components/Editable";
import HeadingSC from "components/Heading";
import ToastSC from "components/Toast";

export default function Heading({ index, project, reduxActRename }) {
  const [ projectName, setProjectName ] = useState( project.name );
  const [ bool, setBool ] = useBoolean( false );
  const toast = useToast({ duration: 3000, position: "top" });
  
  return (
    <>
      <HeadingSC size='md' letterSpacing="wide">
        <EditableS
          value={ bool ? projectName : project.name }
          onChange={ nextValue => {
            setBool.on()
            setProjectName( nextValue )
          }}
          onSubmit={ name => {
            setBool.off()
            reduxActRename( index, project.projectid, name )
            toast({ render: () => 
              <ToastSC 
                status='success'
                headline='Successfully renamed' 
                text="We've renamed your project for you." 
              />
            })   
          }}
        >
          <HStack spacing={ 0 }>
            <Preview project={ project } />
            <Input />
            <Controls />
          </HStack>
        </EditableS>
      </HeadingSC>
    </>
  );
}