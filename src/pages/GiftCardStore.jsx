import { useState } from "react";
// import { PaystackButton } from "react-paystack";
import { Trash2, Plus, Minus } from "lucide-react";

const giftCards = [
  {
    id: 1,
    amount: 10000,
    image: "/gift.jpg",
    description: "₦10,000 VR Gift Card",
  },
  {
    id: 2,
    amount: 25000,
    image: "/gift1.jpg",
    description: "₦25,000 VR Gift Card",
  },
  {
    id: 3,
    amount: 40000,
    image: "/gift2.jpg",
    description: "₦40,000 VR Gift Card",
  },
];

const publicKey = "pk_test_xxxxxxxxxxxxxxxxxxxxxx"; // Replace with your Paystack key

export default function GiftCardStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (card) => {
    const existing = cart.find((item) => item.id === card.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === card.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...card, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.amount * item.quantity, 0);

  const paystackProps = {
    email: "customer@email.com",
    amount: total * 100,
    publicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "Gift Cards",
          variable_name: "cart_items",
          value: cart.map((i) => `${i.description} x${i.quantity}`).join(", "),
        },
      ],
    },
    text: "Pay Now",
    onSuccess: () => alert("✅ Payment successful!"),
    onClose: () => alert("❌ Payment canceled"),
  };

  return (
    <div className="min-h-screen bg-navy text-white py-24 px-6 pt-36">
      <h1 className="text-4xl font-bold text-center text-sky mb-12">
        Buy VR Gift Cards
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {giftCards.map((card) => (
          <div
            key={card.id}
            className="bg-zinc-800 rounded-3xl shadow-lg p-3 text-center border border-sky"
          >
            <img
              src={card.image}
              alt={card.description}
              className="w-full h-48 object-contain mb-6 rounded-3xl"
            />
            <h3 className="text-xl font-semibold mb-2">{card.description}</h3>
            <p className="text-gray-400 mb-4">Use at VR Place Nigeria</p>
            <button
              onClick={() => addToCart(card)}
              className="bg-sky text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-sky transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-16 max-w-xl mx-auto bg-zinc-900 p-6 rounded-xl shadow-inner">
          <h2 className="text-2xl mb-4 font-bold text-sky">🛒 Your Cart</h2>
          <ul className="space-y-4 mb-6">
            {cart.map((item) => (
              <li key={item.id} className="flex flex-wrap justify-between items-center gap-2">
              <span className="truncate max-w-[120px]">{item.description}</span>
              <div className="flex flex-wrap items-center gap-3 max-w-full">
                <button onClick={() => decreaseQuantity(item.id)} className="text-sky hover:text-white">
                  <Minus size={18} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="text-sky hover:text-white">
                  <Plus size={18} />
                </button>
                <span className="ml-2">₦{(item.amount * item.quantity).toLocaleString()}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700" title="Remove">
                  <Trash2 size={18} />
                </button>
              </div>
            </li>            
            ))}
          </ul>

          <div className="text-right mb-4 font-bold text-lg text-white">
            Total: ₦{total.toLocaleString()}
          </div>

          {/* <PaystackButton
            {...paystackProps}
            className="w-full bg-sky text-black py-3 rounded-full font-semibold hover:bg-black hover:text-sky transition"
          /> */}
        </div>
      )}
    </div>
  );
}
