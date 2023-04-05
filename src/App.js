import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <div className='section-image'></div>
        <h1 className="section-title">Faça algo mágico...</h1>
        <p className="section-text">Ache sempre tudo em um só lugar</p>
        <article className='section-container'>
          <div className='container__content-input'>
            <span class="material-symbols-outlined container__content-input-icon">search</span>
            <input className="container__content-input-input" placeholder='Faça algo mágico...'></input>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
