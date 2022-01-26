import { ChakraProvider} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import "App.css";
import Home from "pages/home/View";
import Layout from "pages/Layout";
import Group from "pages/group/View";

export default function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path=':projectid' element={ <Group /> } />
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}