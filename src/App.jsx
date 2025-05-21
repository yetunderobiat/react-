import "./App.css";
import Body from "./Body";
import Footer from "./component/Footer";
import Friends from "./component/Friends";
// import Group from "./component/Group";

import Nav from "./component/Nav";
import Patients from "./component/Patients";

function App() {
  return (
    <>
      <Nav />
      <Body />
      <Patients />
      <Friends />
      {/* <Group /> */}
      <Footer />
    </>
  );
}

export default App;
