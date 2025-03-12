import Alert from "./components/Alert";


function App() {
  let items = ["New york", "Mumbai", "Berlin", "Istanbul", "Paris"];
  const onSelectItem = (item: string) => {
    console.log(item);
  }

  return (
  
    <div>
   <Alert>
    <h1>hello world</h1>
    </Alert>
    </div>
  );
}

export default App;