import { Stack } from "@chakra-ui/react";

import useProject from "datafetching/useProject";
import useUser from "datafetching/useUser";
import Projects from "./templates/Projects";
import Heading from "components/Heading";

export default function View() {
  const { project } = useProject();
  const { user } = useUser();

  return (
    <>
      <Stack p={ 8 } spacing={ 4 }>
        <Heading size='xs' opacity='0.5'>Đã ghim</Heading>
        <Projects project={ project } user={ user } pin={ 1 } />
        <Heading size='xs' opacity='0.5'>Khác</Heading>
        <Projects project={ project } user={ user } pin={ 0 } />
      </Stack>
    </>
  );
}