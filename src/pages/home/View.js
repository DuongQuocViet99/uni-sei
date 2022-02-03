import { Divider, Stack } from "@chakra-ui/react";
import useProject from "datafetching/useProject";
import Projects from "./templates/Projects";
import HeadingSC from "components/Heading";

export default function View() {
  const { project } = useProject();
  
  return (
    <>
      <Stack p={ 8 } spacing={ 4 }>
        <HeadingSC size='xs' opacity='0.6'>PENDING</HeadingSC>
        <Divider borderColor='rgba(109, 104, 117, 0.4)' />
          <Projects project={ project } anchor={ 1 } />
        <HeadingSC size='xs' opacity='0.6'>DONE</HeadingSC>
        <Divider borderColor='rgba(109, 104, 117, 0.4)' />
          <Projects project={ project } anchor={ 0 } />
      </Stack>
    </>
  );
}