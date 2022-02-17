import { Divider, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import HeadingSC from "components/Heading";
import useProject from "datafetching/useProject";
import useUser from "datafetching/useUser";
import ProjectRender from "pages/index/temp/Project.render";

export default function View({ state, reduxActdefaultState }) {
  const { project } = useProject();
  const { user } = useUser();
  useEffect(() => reduxActdefaultState( project ), [ reduxActdefaultState, project ]);

  return (
    <>
      <Stack p={ 8 } spacing={ 4 }>
        <HeadingSC size='xs' opacity='0.6'>PENDING</HeadingSC>
        <Divider borderColor='rgba(109, 104, 117, 0.4)' />
        <ProjectRender project={ state } user={ user } status={ 1 } />
        <HeadingSC size='xs' opacity='0.6'>DONE</HeadingSC>
        <Divider borderColor='rgba(109, 104, 117, 0.4)' />
        <ProjectRender project={ state } user={ user } status={ 0 } />
      </Stack>
    </>
  );
}