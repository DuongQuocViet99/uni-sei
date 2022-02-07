import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import "App.css";
import Layout from "pages/Layout";
import Group from "pages/group/View";
import Index from "redux/index/Bindings/State.default";

export default function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Index /> } />
            <Route path=':projectid' element={ <Group /> } />
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}