import { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ItemsList from './ItemsList';
import AddItems from './AddItems';

function App() {
   const [items, setItems] = useState([{id : 1}])
  return (
      <div>
          <Header/> 
            <div className='container'> 
               <AddItems/>
               <ItemsList items={items}/>  
            </div>
         <Footer/>
     </div>
  );
}

export default App;
