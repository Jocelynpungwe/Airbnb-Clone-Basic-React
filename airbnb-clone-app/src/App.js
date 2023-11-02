import Card from './components/Card.js';
import Header from './components/Header.js';
import Info from './components/Info.js';
import data from './data.js';


import './App.css';

function App() {
  
  const cardComp =   data.map(item =>{
      return (
            <Card
              key={item.id}
              item={item}
            />
      )
          
  })

  return (
      <>
        <Header/>
        <Info/>
        <section className="cards-list">
                {cardComp}
        </section>
      </>  
  );
}

export default App;
