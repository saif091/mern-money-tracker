import './App.css';
import react,{useEffect, useState} from 'react';
import axios from 'axios'
function App() {
  const [name,setName] = useState("");
  const [transaction,setTransaction] = useState('')
  const [price,setPrice] = useState("");
  const [datetime,setDateTime] = useState("");
  const [description,setDescription] = useState("");
  useEffect(()=>{
    const fetchdata = async()=>{
      const res = await axios.get("http://localhost:4000/api/transactions")
      if(res){
        console.log(res.data)
        setTransaction(res.data)
      }
    }
    fetchdata()
  },[transaction])
  const handleSubmit =async(e)=>{
    e.preventDefault()
    const url ="http://localhost:4000/api/transaction";
    await axios.post(url,{name,description,datetime,price})
  
    .then(res=>{
      console.log(res)
      
    })
    setName("")
    setPrice("")
    setDateTime("")
    setDescription("")
  }
  let balance = 0;
  for (const tr of transaction){
    balance = balance +tr.price
  }
  return (
    <main>
      <h1>Rs {balance}<span></span></h1>
      <form onSubmit={handleSubmit}>
       <div className="basic">
       <input 
        type="text"
        onChange={(e)=>setName(e.target.value)}
        value={name}
        placeholder="new samsungTv"/>
         <input 
        type="text"
        onChange={(e)=>setPrice(e.target.value)}
        value={price}
        placeholder="price with +or-"/>
        <input
        type="datetime-local"
        value={datetime}
        onChange={(e)=>setDateTime(e.target.value)}
        />
       </div>
       <div>
       <input 
        type="text"
        onChange={(e)=>setDescription(e.target.value)}
        value={description}
        placeholder="Enter decription" />
       </div>
       <button type="submit">Add new Transaction</button>
      </form>
      <div className="transactions">
        {
          transaction ? transaction.map(transac=>{
            return (
              <div className="transaction" >
              <div className="left">
                <div className="name" >{transac.name}</div>
                <div className="description" >{transac.description}</div>
              </div>
              <div className="right" >
                <div className={"price " + (transac.price<0?'red':'green')}>{transac.price}</div>
                <div className="datetime">{transac.datetime}</div>
              </div>
            </div>
            )
          }):""
        }
      </div>
      <div>
        
      </div>
    </main>
  );
}

export default App;
