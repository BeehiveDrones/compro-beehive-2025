import Image from 'next/image';
import { Product } from '../page';

interface PaymentMethodModalProps {
  selectedProduct: Product;
  setShowPaymentModal: (show: boolean) => void;
  setShowCheckoutModal: (show: boolean) => void;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (method: string) => void;
  quantity: number;
  shippingMethod: string;
  calculateTotal: () => string;
  handlePaymentConfirmation: () => void;
  isLoading: boolean;
}

export default function PaymentMethodModal({
  selectedProduct,
  setShowPaymentModal,
  setShowCheckoutModal,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  quantity,
  shippingMethod,
  calculateTotal,
  handlePaymentConfirmation,
  isLoading,
}: PaymentMethodModalProps) {
  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setShowPaymentModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          ✕
        </button>
        {/* Left Section: Payment Method Selection */}
        <div className="p-8 md:w-3/5">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Payment Method</h2>
          <div className="space-y-6">
            {/* Credit/Debit Card */}
            <div 
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedPaymentMethod === 'Credit/Debit Card' ? 'border-2 border-[#1e3a8a] ring-2 ring-[#1e3a8a]' : 'border border-gray-200 hover:border-gray-300'
              }`} 
              onClick={() => setSelectedPaymentMethod('Credit/Debit Card')}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit/Debit Card"
                  checked={selectedPaymentMethod === 'Credit/Debit Card'}
                  onChange={() => setSelectedPaymentMethod('Credit/Debit Card')}
                  className="form-radio h-5 w-5 accent-[#1e3a8a] focus:ring-[#1e3a8a]"
                />
                <span className="ml-3 text-lg font-medium">Credit/Debit Card</span>
                <span className="ml-auto flex gap-2">
                  <Image src="/bank/visa.png" alt="Visa" width={40} height={20} className="object-contain" />
                  <Image src="/bank/master.png" alt="Mastercard" width={40} height={20} className="object-contain" />
                  <Image src="/bank/amex.png" alt="Amex" width={40} height={20} className="object-contain" />
                </span>
              </label>
              {selectedPaymentMethod === 'Credit/Debit Card' && (
                <div className="mt-4 space-y-3 animate-fadeIn">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card number</label>
                    <input 
                      type="text" 
                      id="cardNumber" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" 
                      placeholder="1234 1234 1234 1234" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry</label>
                      <input 
                        type="text" 
                        id="expiry" 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" 
                        placeholder="MM/YY" 
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                      <input 
                        type="text" 
                        id="cvc" 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" 
                        placeholder="123" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardCountry" className="block text-sm font-medium text-gray-700">Country</label>
                      <select 
                        id="cardCountry" 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Indonesia</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cardPostalCode" className="block text-sm font-medium text-gray-700">Postal code</label>
                      <input 
                        type="text" 
                        id="cardPostalCode" 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" 
                        placeholder="90210" 
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Bank Transfer / Virtual Account */}
            <div 
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedPaymentMethod === 'Bank Transfer / Virtual Account' ? 'border-2 border-[#1e3a8a] ring-2 ring-[#1e3a8a]' : 'border border-gray-200 hover:border-gray-300'
              }`} 
              onClick={() => setSelectedPaymentMethod('Bank Transfer / Virtual Account')}
            >
              <label className="flex flex-col cursor-pointer space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Bank Transfer / Virtual Account"
                    checked={selectedPaymentMethod === 'Bank Transfer / Virtual Account'}
                    onChange={() => setSelectedPaymentMethod('Bank Transfer / Virtual Account')}
                    className="form-radio h-5 w-5 accent-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                  <span className="ml-3 text-lg font-medium">Bank Transfer / Virtual Account</span>
                </div>
                <small className='ml-8 font-stretch-normal text-gray-400'>Make payment directly through bank account.</small>
                <div className="flex space-x-2 ml-8">
                  <Image src="/bank/mandiri.png" alt="Mandiri" width={50} height={20} className="object-contain" />
                  <Image src="/bank/bri.png" alt="BNI" width={50} height={20} className="object-contain" />
                  <Image src="/bank/bca.png" alt="BCA" width={50} height={20} className="object-contain" />
                  <Image src="/bank/cmb.png" alt="CMB" width={50} height={20} className="object-contain" />
                </div>
              </label>
              {selectedPaymentMethod === 'Bank Transfer / Virtual Account' && (
                <div className="mt-4 text-sm text-gray-600 animate-fadeIn">
                </div>
              )}
            </div>
            {/* Other Payment Methods */}
            <div 
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedPaymentMethod === 'Other Payment Methods' ? 'border-2 border-[#1e3a8a] ring-2 ring-[#1e3a8a]' : 'border border-gray-200 hover:border-gray-300'
              }`} 
              onClick={() => setSelectedPaymentMethod('Other Payment Methods')}
            >
              <label className="flex flex-col cursor-pointer space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Other Payment Methods"
                    checked={selectedPaymentMethod === 'Other Payment Methods'}
                    onChange={() => setSelectedPaymentMethod('Other Payment Methods')}
                    className="form-radio h-5 w-5 accent-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                  <span className="ml-3 text-lg font-medium">Other Payment Methods</span>
                </div>
                <div className="flex gap-2 ml-8">
                  <Image src="/bank/paypal.png" alt="PayPal" width={70} height={20} className="object-contain" />
                  <Image src="/bank/gopay.png" alt="Gopay" width={70} height={20} className="object-contain" />
                  <Image src="/bank/applepay.png" alt="Apple Pay" width={60} height={20} className="object-contain" />
                </div>
              </label>
              {selectedPaymentMethod === 'Other Payment Methods' && (
                <div className="mt-4 text-sm text-gray-600 animate-fadeIn">
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Right Section: Order Summary */}
        <div className="p-8 md:w-2/5 bg-gray-50 border-l border-gray-200 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Order Summary</h2>
            <div className="flex items-start mb-4">
              <div className="relative w-24 h-24 flex-shrink-0 mr-4 rounded overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{selectedProduct.name}</h3>
                <p className="text-sm text-gray-600">{selectedProduct.description}</p>
                <div className="flex items-center mt-2">
                  <span className="mx-2 font-medium">Qty: {quantity}</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>{calculateTotal()}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>{shippingMethod === 'standard' ? 'FREE' : 'Rp250.000'}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax</span>
                <span>Included</span>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <div className="flex justify-between text-xl font-bold text-[#1e3a8a]">
                <span>Total Due</span>
                <span>{shippingMethod === 'standard' ? calculateTotal() : `Rp${(parseFloat(selectedProduct.price.replace(/[^0-9]/g, '')) * quantity + 250000).toLocaleString('id-ID')}`}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={() => {
                setShowPaymentModal(false);
                setShowCheckoutModal(true);
              }}
              className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition"
            >
              Back
            </button>
            <button
              onClick={handlePaymentConfirmation}
              disabled={isLoading}
              className={`bg-[#1e3a8a] text-white px-6 py-2 rounded hover:bg-blue-800 transition flex items-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Confirm Payment
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
