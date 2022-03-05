import { Flex } from "@chakra-ui/react";
import Features from "pages/index/temp/comp/features/Features";
import Users from "pages/index/temp/comp/users/Users";
import Heading from "redux/index/bindings/Heading.rename";
import TextS from "components/Text";

export default function Project({ index, project, user }) {
  return (
    <>
      <Heading index={ index } project={ project } /> {/* Heading */} 
      <TextS fontSize='xs' opacity='0.6'> 
        { project.timecreate.split(' ')[0] } 
      </TextS>
      <Flex justifyContent='space-between' mt={ 4 }> 
        <Users project={ project } user={ user } /> {/* Users */}
        <Features project={ project } index={ index } /> {/* Features */}
      </Flex>
    </>
  )
}