import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <div className='section-image'></div>
        <h1 className="section-title">Faça algo mágico...</h1>
        <p className="section-text">Ache sempre tudo em um só lugar</p>
        <div className='section-container___input'>
          <span class="material-symbols-outlined container___input-icon">search</span>
          <input className="container___input-input" placeholder='Faça algo mágico...'></input>
        </div>
        
      </section>
    </div>
  );
}

export default App;
