import Header from './components/Header';
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';

 function App() {

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
      </main>
    </div>
  );
}

export default App;
