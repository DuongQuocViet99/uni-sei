import { Flex } from "@chakra-ui/react";
import Name from "redux/index/bindings/Heading.rename";
import Users from "pages/index/temp/comp/users/users";
import Act from "pages/index/temp/comp/action/menu";
import TextS from "components/Text";

export default function Project({ index, project, user }) {
  return (
    <>
      <Name index={ index } project={ project } /> {/* Name */} 
      <TextS fontSize='xs' opacity='0.6'> 
        { project.timecreate.split(' ')[0] } 
      </TextS>
      <Flex justifyContent='space-between' mt={ 4 }> 
        <Users project={ project } user={ user } /> {/* Users */}
        <Act project={ project } index={ index } /> {/* Features */}
      </Flex>
    </>
  )
}