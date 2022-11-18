import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  if (!visible || !order) return null;

  const total = order.products.reduce((acc, item) => {
    acc += item.product.price * item.quantity;
    return acc;
  }, 0);

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[480px] rounded-lg p-8">
        <header className="flex items-center justify-between">
          <strong className="text-2xl">Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="ícone de fechar" />
          </button>
        </header>
        <div className="mt-8">
          <small className="text-sm opacity-80">Status do pedido</small>
          <div className="flex items-center gap-2 mt-2">
            <span>
              {order.status === 'WAITING' && '🕒'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>
        <div className="mt-8">
          <small className="text-sm opacity-80">Itens</small>
          <div className="mt-4 flex flex-col gap-4">
            {order.products.map(({ _id, product, quantity }) => (
              <div key={_id} className="flex items-start">
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56px"
                  className="rounded-md"
                />
                <span className="text-sm text-gray-700 block min-w-[20px] ml-3 leading-none">{quantity}x</span>
                <div>
                  <strong className="block mb-1 leading-none">{product.name}</strong>
                  <span className="text-sm text-gray-700">{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-sm opacity-80">Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </div>
        <footer className="flex flex-col gap-3 mt-8">
          <button
            type="button"
            className="flex gap-2 items-center justify-center bg-gray-900 text-white rounded-full py-3 px-6"
          >
            <span>
              {order.status === 'WAITING' && '👩‍🍳'}
              {order.status === 'IN_PRODUCTION' && '✅'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Iniciar Produção'}
              {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
              {order.status === 'DONE' && 'Pedido Concluído'}
            </strong>
          </button>
          <button type="button" className="py-[14px] px-6 text-red-500 font-bold">
            Cancelar pedido
          </button>
        </footer>
      </div>
    </div>
  );
}
