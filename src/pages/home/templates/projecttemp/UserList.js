import { Avatar, AvatarGroup } from "@chakra-ui/react";
import useUser from "datafetching/useUser";

export default function UserList({ project }) {
  const { user } = useUser()
  
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