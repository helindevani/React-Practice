import {useState} from 'react';
import {EXAMPLES} from './data.js';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx'

function App() {
  const [selectedTopic,setSelectedTopic]=useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          
            {!selectedTopic ? (<p>Please Select A Topic.</p>) 
            : (
            <div id="tab-content">  
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          ) }
          
        </section>
      </main>
    </div>
  );
}

export default App;
