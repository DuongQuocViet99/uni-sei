import { ChakraProvider} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import HomeIndex from "pages/home/Index";
import GroupIndex from "pages/group/Index";
import "App.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={ <HomeIndex /> } />
          <Route path='/:projectid' element={ <GroupIndex /> } />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;