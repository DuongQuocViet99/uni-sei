import { Avatar, AvatarGroup } from "@chakra-ui/react";
import FilterToMapUser from "render/FilterToMapUser";

export default function Users({ user, project }) {
  return (
    <>
      <FilterToMapUser 
        Chil={ AvatarGroup }
        propsChil={{ size: 'xs' }}
        data={ user } 
        condition={ u => u.projectid === project.projectid } 
        render={( i, k ) => 
          <Avatar key={ k } bg='#6d6875' color='white' name={ i.fullname } />
      }/>
    </>
  );
}