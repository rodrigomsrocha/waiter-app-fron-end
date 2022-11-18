export function Orders() {
  return (
    <div className="w-full max-w-base mx-auto my-10 flex gap-8">
      <div className="p-4 border border-gray-300 border-opacity-40 rounded-2xl flex flex-col items-center justify-center flex-1">
        <header className="p-2 text-sm flex items-center gap-2">
          <span>🕒</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>
        <div className="flex flex-col w-full mt-6 gap-6">
          <button
            type="button"
            className="bg-white border border-gray-300 border-opacity-40 rounded-lg h-32 flex flex-col justify-center items-center gap-1"
          >
            <strong>Mesa 2</strong>
            <span className="text-sm text-gray-700">2 itens</span>
          </button>
          <button
            type="button"
            className="bg-white border border-gray-300 border-opacity-40 rounded-lg h-32 flex flex-col justify-center items-center gap-1"
          >
            <strong>Mesa 2</strong>
            <span className="text-sm text-gray-700">2 itens</span>
          </button>
        </div>
      </div>
      <div className="p-4 border border-gray-300 border-opacity-40 rounded-2xl flex flex-col items-center justify-center flex-1">
        <header className="p-2 text-sm flex items-center gap-2">
          <span>👩‍🍳</span>
          <strong>Em produção</strong>
          <span>(1)</span>
        </header>
        <div className="flex flex-col w-full mt-6 gap-6">
          <button
            type="button"
            className="bg-white border border-gray-300 border-opacity-40 rounded-lg h-32 flex flex-col justify-center items-center gap-1"
          >
            <strong>Mesa 2</strong>
            <span className="text-sm text-gray-700">2 itens</span>
          </button>
          <button
            type="button"
            className="bg-white border border-gray-300 border-opacity-40 rounded-lg h-32 flex flex-col justify-center items-center gap-1"
          >
            <strong>Mesa 2</strong>
            <span className="text-sm text-gray-700">2 itens</span>
          </button>
        </div>
      </div>
      <div className="p-4 border border-gray-300 border-opacity-40 rounded-2xl flex flex-col items-center justify-center flex-1">
        <header className="p-2 text-sm flex items-center gap-2">
          <span>✅</span>
          <strong>Pronto!</strong>
          <span>(1)</span>
        </header>
        <div className="flex flex-col w-full mt-6 gap-6">
          <button
            type="button"
            className="bg-white border border-gray-300 border-opacity-40 rounded-lg h-32 flex flex-col justify-center items-center gap-1"
          >
            <strong>Mesa 2</strong>
            <span className="text-sm text-gray-700">2 itens</span>
          </button>
          <button
            type="button"
            className="bg-white border border-gray-300 border-opacity-40 rounded-lg h-32 flex flex-col justify-center items-center gap-1"
          >
            <strong>Mesa 2</strong>
            <span className="text-sm text-gray-700">2 itens</span>
          </button>
        </div>
      </div>
    </div>
  );
}
