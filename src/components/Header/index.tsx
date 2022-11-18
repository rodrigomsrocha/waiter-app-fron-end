import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <header className="bg-red-500 flex justify-center h-[198px] items-center">
      <div className="w-full max-w-base flex items-center justify-between text-white">
        <div>
          <h1 className="font-semibold text-display mb-[6px]">Pedidos</h1>
          <h2 className="font-normal text-base">Acompanhe os pedidos dos clientes.</h2>
        </div>
        <img src={logo} alt="WaiterApp" />
      </div>
    </header>
  );
}
