import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

interface Order {
  id: string;
  created_at: string;
  status: string;
  total: number;
  items: OrderItem[];
}

interface OrderItem {
  product_id: number;
  quantity: number;
  price: number;
}

function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const { data: orders, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            product_id,
            quantity,
            price
          )
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(orders || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#8B7355]">My Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="bg-[#D4C4A8] text-white px-6 py-2 rounded-lg hover:bg-[#8B7355] transition-colors"
          >
            Sign Out
          </button>
        </div>

        <div className="bg-[#F5F5DC] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#8B7355] mb-6">Order History</h2>
          {loading ? (
            <p className="text-[#8B7355]">Loading orders...</p>
          ) : orders.length === 0 ? (
            <p className="text-[#8B7355]">No orders found.</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[#8B7355] font-semibold">Order #{order.id.slice(0, 8)}</p>
                      <p className="text-[#8B7355]">
                        {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-[#D4C4A8] text-white">
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-[#D4C4A8] pt-4">
                    <p className="text-[#8B7355] font-semibold">
                      Total: ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;