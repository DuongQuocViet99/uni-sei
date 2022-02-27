import { Flex } from "@chakra-ui/react";
import TextSC from "components/Text";
import Features from "pages/index/temp/project_temp/features/Features";
import Users from "pages/index/temp/project_temp/users/Users";
import Heading from "redux/index/bindings/Heading.rename";

export default function Project({ index, project, user }) {
  return (
    <>
      <Heading index={ index } project={ project } /> {/* Heading */} 
      <TextSC fontSize='xs' opacity='0.6'> 
        { project.timecreate.split(' ')[0] } 
      </TextSC>
      <Flex justifyContent='space-between' mt={ 4 }> 
        <Users project={ project } user={ user } /> {/* Users */}
        <Features project={ project } index={ index } /> {/* Features */}
      </Flex>
    </>
  )
}