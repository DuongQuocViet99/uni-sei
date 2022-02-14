import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "App.css";
import Layout from "pages/Layout";
import Group from "pages/group/View";
import Index from "redux/index/Bindings/State.default";

export default function App() {
  const theme = extendTheme({
    colors: {
      sei: {
        gray: '#6d6875',
        brown: '#b5838d',
        red: '#e5989b',
        orange: '#ffb4a2',
        yellow: '#ffcdb2',
      }
    }
  });

  return (
    <>
      <ChakraProvider theme={ theme }>
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