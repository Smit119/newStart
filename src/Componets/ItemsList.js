import Singleiteam from './Singleitem'
export default function ItemsList({items}){
    return(
        <div>
            <h3>Items List</h3>
           {items.map((items)=>(
              <Singleiteam items={items} key={items.id} />
            ))}  
        </div>
    );
}