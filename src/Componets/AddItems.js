import { useState } from "react";
export default function AddItems(){

    const [name,setname]= useState('Milk packet');
    const [Quantity, setQuantity]=useState(1);
    const [price, setPrice] = useState(0);

    function onAddItemSubmit(e){
        e.preventDefult();
        if(name =='') return;
        const item = {name,Quantity,price,id:Date.now()};
        console.log(item)
        setname('');
        setQuantity(1);
        setPrice(0)
    } 
    return (<div>
            <from className="add-item" onSubmit={onAddItemSubmit}>
                <div>
                    <label>Item Name</label>
                    <input type="text" value={name} onChange={(e)=> setname(e.target.value)}  />
                </div>
                <div>
                    <label>Quantity:</label>
                    <select value={Quantity} onChange ={(e)=> setQuantity(e.target.value)}>
                         {Array.from({length:20 },(_,i)=> i+1).map(value=><option value={value}>{value}</option>)}
                    </select>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price}  onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div>
                    <button className="btn" on>Add Item</button>
                </div>
            </from> 
        </div>)
}