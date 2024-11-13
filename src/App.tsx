import { main } from "./schema/user";

function App() {
  const data = main();
  console.log(data);
  return (
    <div className='App'>
      <h1>JSON Server</h1>
      {}
    </div>
  );
}

export default App;
