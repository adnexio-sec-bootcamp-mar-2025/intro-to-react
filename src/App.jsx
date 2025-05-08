import Header from './components/Header';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';


 function App() {
  const [title, setTitle] = useState('components');
  // const name = 'Components';

  function handleClick(name) {
    // name = 'JSX';
    setTitle(name);
    console.log(name);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concepItem => (
              <CoreConcept key={concepItem.title} {...concepItem}/>
            ))}
          </ul>
        </section>
        <section id="examples">

          <h2>Examples</h2>

          <menu>
            <TabButton onSelect={function(){handleClick('components')}}>Components</TabButton>
            <TabButton onSelect={function(){handleClick('jsx')}}>JSX</TabButton>
            <TabButton onSelect={function(){handleClick('props')}}>Props</TabButton>
            <TabButton onSelect={function(){handleClick('state')}}>State</TabButton>
          </menu>

          {/* event listeners & event handlers */}
          {/* {document.querySelector('button').addEventListener('click', function() {
            console.log('button clicked');
          });} */}

          <div id="tab-content">
            <h3>{EXAMPLES[title].title}</h3>
            <p>{EXAMPLES[title].description}</p>
            <pre>
              <code>{EXAMPLES[title].code}</code>
            </pre>
          </div>

        </section>
      </main>
    </div>
  );
}

export default App;