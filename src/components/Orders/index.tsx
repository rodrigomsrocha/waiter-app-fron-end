import { OrdersBoard } from '../OrdersBoard';

export function Orders() {
  return (
    <div className="w-full max-w-base mx-auto my-10 flex gap-8">
      <OrdersBoard icon="🕒" title="Fila de espera" />
      <OrdersBoard icon="👩‍🍳" title="Em preparação" />
      <OrdersBoard icon="✅" title="Pronto!" />
    </div>
  );
}
