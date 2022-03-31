import { Box, HStack, LinkOverlay, useBoolean, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Preview from "pages/index/temp/comp/name/edit/preview";
import Input from "pages/index/temp/comp/name/edit/input";
import Options from "pages/index/temp/comp/options/options";
import EditableS from "components/Editable";
import ToastS from "components/Toast";

export default function Name({ index, project, reduxActRenProj }) {
  const [ projectName, setProjectName ] = useState( project.name );
  const [ bool, setBool ] = useBoolean( false );
  const toast = useToast({ duration: 300000, position: "top-end" });

  const onChange = nextValue => {
    setBool.on();
    setProjectName( nextValue );
  }

  const onSubmit = name => {
    setBool.off();
    reduxActRenProj( index, project.projectid, name );
    toast({ render: () => 
      <ToastS 
        status='success'
        headline='Successfully renamed' 
        text="We've renamed your project for you." 
      />
    });
  }

  return (
    <>
      <EditableS
        value={ bool ? projectName : project.name }
        onChange={ nextValue => onChange( nextValue )}
        onSubmit={ name => onSubmit( name )}
      >
        <HStack spacing={ 0 }>
          <LinkOverlay
            flex={ 1 } 
            as={ Link } 
            to={`/${ project.projectid }/task`}
          >
            <Preview />
          </LinkOverlay>
          <HStack spacing={ 1 }>
            <Input />
            <Box>
              <Options 
                project={ project } 
                index={ index } 
              />
            </Box>
          </HStack>
        </HStack>
      </EditableS>
    </>
  );
}