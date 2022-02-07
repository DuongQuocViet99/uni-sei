import { Avatar, AvatarGroup } from "@chakra-ui/react";

export default function UsersForThis({ user, project }) {
  return (
    <>
      <AvatarGroup size='xs'>
        {
          user?.filter( u => u.projectid === project.projectid ).map(( i, k ) => 
            <Avatar key={ k } bg='#6d6875' color='white' name={ i.fullname } />   
          )
        }
      </AvatarGroup>
    </>
  );
}