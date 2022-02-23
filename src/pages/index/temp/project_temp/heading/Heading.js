import { HStack, useBoolean, useToast } from "@chakra-ui/react";
import { useState } from "react";
import HeadingSC from "components/Heading";
import Preview from "pages/index/temp/project_temp/heading/edit/Preview";
import Input from "pages/index/temp/project_temp/heading/edit/Input";
import Controls from "pages/index/temp/project_temp/heading/edit/Controls";
import ToastSC from "components/Toast";
import EditableS from "components/Editable";

export default function Heading({ project, reduxActRename }) {
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
            reduxActRename( project, name )
            toast({ render: () => 
              <ToastSC 
                status='success'
                heading='Successfully renamed' 
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