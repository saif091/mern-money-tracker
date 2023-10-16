import './App.css';
import react,{useState} from 'react';
import axios from 'axios'
function App() {
  const [name,setName] = useState("");
  const [datetime,setDateTime] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    const url ="http://localhost:4000/api/transaction";
    axios.post(url,{name,description,datetime})
    .then(res=>{
      console.log(res)
    })
  }
  const [description,setDescription] = useState("");
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={handleSubmit}>
       <div className="basic">
       <input 
        type="text"
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter Product"/>
        <input
        type="datetime-local"
        onChange={(e)=>setDateTime(e.target.value)}
        />
       </div>
       <div>
       <input 
        type="text"
        onChange={(e)=>setDescription(e.target.value)}
        placeholder="Enter decription" />
       </div>
       <button type="submit">Add new Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction" >
          <div className="left">
            <div className="name" >New Samsung Tv</div>
            <div className="description" >it was time for new Tv</div>
          </div>
          <div className="right" >
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction" >
          <div className="left">
            <div className="name" >New Samsung Tv</div>
            <div className="description" >it was time for new Tv</div>
          </div>
          <div className="right" >
            <div className="price green">+$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
