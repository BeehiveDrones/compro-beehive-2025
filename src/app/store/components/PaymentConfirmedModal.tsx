import { Product } from '../page';

interface PaymentConfirmedModalProps {
  selectedProduct: Product;
  setShowPaymentConfirmedModal: (show: boolean) => void;
  setSelectedProduct: (product: Product | null) => void;
  quantity: number;
  shippingMethod: string;
  calculateTotal: () => string;
  selectedPaymentMethod: string;
  calculateInstallmentPerMonth: () => number;
}

export default function PaymentConfirmedModal({
  selectedProduct,
  setShowPaymentConfirmedModal,
  setSelectedProduct,
  quantity,
  shippingMethod,
  calculateTotal,
  selectedPaymentMethod,
  calculateInstallmentPerMonth,
}: PaymentConfirmedModalProps) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 text-center shadow-xl relative">
        <button
          onClick={() => {
            setShowPaymentConfirmedModal(false);
            setSelectedProduct(null);
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ✕
        </button>
        <div className="mb-6">
          <svg className="mx-auto h-24 w-24 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Your payment for <span className="font-semibold">{selectedProduct.name}</span> has been successfully processed.
          We ll send a confirmation email with your order details shortly.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <h3 className="font-medium text-gray-800 mb-2">Order Summary</h3>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Product:</span>
            <span>{selectedProduct.name}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Quantity:</span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Total:</span>
            <span className="font-medium">{shippingMethod === 'standard' ? calculateTotal() : `Rp${(parseFloat(selectedProduct.price.replace(/[^0-9]/g, '')) * quantity + 250000).toLocaleString('id-ID')}`}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Payment Method:</span>
            <span>{selectedPaymentMethod}</span>
          </div>
          {selectedPaymentMethod === 'Installment' && (
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Installment/Month:</span>
              <span className="font-medium">{`Rp${Math.round(calculateInstallmentPerMonth()).toLocaleString('id-ID')}`}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => {
              setShowPaymentConfirmedModal(false);
              setSelectedProduct(null);
            }}
            className="bg-[#1e3a8a] text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
