import "./App.css";
import Body from "./Body";
import Click from "./component/Click";
import Footer from "./component/Footer";
import Friends from "./component/Friends";
// import Group from "./component/Group";

import Nav from "./component/Nav";
import Patients from "./component/Patients";

function App() {
  return (
    <>
      <Nav />
      <Click />
      <Body />
      <Patients />
      <Friends />
      {/* <Group /> */}
      <Footer />
    </>
  );
}

export default App;
