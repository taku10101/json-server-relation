import { main } from "./schema/user";

function App() {
  return (
    <div className='App'>
      <h1>JSON Server</h1>
      <button onClick={main}>Download JSON</button>
    </div>
  );
}

export default App;
