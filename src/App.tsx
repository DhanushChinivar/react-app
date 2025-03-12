import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "Mumbai", "Berlin", "Istanbul", "Paris"];
  const onSelectItem = (item: string) => {
    console.log(item);
  }

  return (<div>
    <ListGroup items= {items} heading = "cities" onSelectItem= {onSelectItem}/>
    <Alert text ="hello worllld!!!" />

    </div>
  );
}

export default App;