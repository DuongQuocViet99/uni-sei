import { Editable, HStack, useBoolean, useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import HeadingSC from "components/Heading";
import Preview from "pages/index/temp/project_temp/heading/edit/Preview";
import Input from "pages/index/temp/project_temp/heading/edit/Input";
import Controls from "pages/index/temp/project_temp/heading/edit/Controls";
import ToastSC from "components/Toast";

export default function Heading({ project }) {
  const [ state, setState ] = useState( project.name );
  const [ bool, useBool ] = useBoolean();
  const toast = useToast({ duration: 3000, position: "top" });

  return (
    <>
      <HeadingSC size='md' letterSpacing="wide">
        <Editable 
          isPreviewFocusable={ false } 
          submitOnBlur={ false }
          value={ bool ? state : project.name }
          onEdit={ useBool.on }
          onCancel={ useBool.off }
          onChange={ nextValue => setState( nextValue ) }
          onSubmit={ name => {
            axios({ 
              method: 'PUT', 
              url: `http://localhost:3001/project/${ project.projectid }/rename`, 
              data: { name } 
            })
            .then( res => res.status === 200 && 
              toast({
                render: () => (
                  <ToastSC 
                    status='success'
                    heading='Successfully renamed' 
                    text="We've renamed your project for you." 
                  />
                )
              })   
            )
            useBool.off() 
          }}
        >
          <HStack spacing={ 0 }>
            <Preview project={ project } />
            <Input />
            <Controls />
          </HStack>
        </Editable>
      </HeadingSC>
    </>
  );
}