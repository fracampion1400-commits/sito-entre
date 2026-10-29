function App() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            ENTRE.srl menti in legno  la qua qua che dura
          </h1>

          <p className="text-xl mb-8">
            Serramenti, porte, tapparelle e ristrutturazioni.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
            Richiedi un Preventivo
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            I Nostri Servizi
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold mb-2">Serramenti</h3>
              <p>Installazione e sostituzione infissi.</p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold mb-2">Porte</h3>
              <p>Porte interne e blindate.</p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold mb-2">Ristrutturazioni</h3>
              <p>Interventi completi per abitazioni.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;