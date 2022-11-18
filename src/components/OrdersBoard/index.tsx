import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <div className="p-4 border border-gray-300 border-opacity-40 rounded-2xl flex flex-col items-center justify-center flex-1">
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal} />
      <header className="p-2 text-sm flex items-center gap-2">
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <div className="flex flex-col w-full mt-6 gap-6">
          {orders.map((order) => (
            <button
              key={order._id}
              onClick={() => handleOpenModal(order)}
              type="button"
              className="bg-white border border-gray-300 border-opacity-40 rounded-lg h-32 flex flex-col justify-center items-center gap-1"
            >
              <strong>Mesa {order.table}</strong>
              <span className="text-sm text-gray-700">{order.products.length} items</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
