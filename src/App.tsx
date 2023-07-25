// import ListGroup from "./components/ListGroup";
import { Fragment } from "react";
import Alert from "./components/Alert";
function App() {
  //items.map((item) => <li>{item}</li>); // we use {} to render data dynamically
  // here using items we can take each item and convert it an item of a different type
  // let items = ["New York", "Ethiopia", "Kenya", "England", "Canada"];
  // let heading = "Cities";
  return (
    <>
      {/* <ListGroup items={items} heading={heading}></ListGroup> */}
      <Alert> This an alert message of testing a react children concept</Alert>
    </>
  );
}

export default App;
