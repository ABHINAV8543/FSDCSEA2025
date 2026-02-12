import { useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getFetchData() {
    try {
      setLoading(true);

      const serverData = await fetch('http://localhost:4002/data');
      const jsonData = await serverData.json();
      setData(jsonData.msg);

    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h2>Welcome to Node Fetch API</h2>

      {
        loading && <h2>Data is loading...</h2>
      }

      {
        <div className="container">{
          data.map((ele) => (
            <div key={ele.id} className="card">
              <img src={ele.image} height={100} width={100} />
              <h2>{ele.id} : {ele.title}</h2>
              <h3>{ele.price}</h3>
              <button>Add to cart</button>
            </div>
          ))
        }
        </div>
      }

      <button onClick={getFetchData}>Fetch Data</button>
    </>
  )
}

export default App;