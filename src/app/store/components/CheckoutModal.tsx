import Image from 'next/image';
import { Product } from '../page';

interface CheckoutModalProps {
  selectedProduct: Product;
  setShowCheckoutModal: (show: boolean) => void;
  setShowPaymentModal: (show: boolean) => void;
  shippingMethod: string;
  setShippingMethod: (method: string) => void;
  quantity: number;
  setQuantity: (qty: number) => void;
  calculateTotal: () => string;
  validateContactAndShippingForm: () => boolean;
  selectedFinancing: string;
  selectedInstallmentTerm: string;
  calculateInstallmentPerMonth: () => number;
}

export default function CheckoutModal({
  selectedProduct,
  setShowCheckoutModal,
  setShowPaymentModal,
  shippingMethod,
  setShippingMethod,
  quantity,
  setQuantity,
  calculateTotal,
  validateContactAndShippingForm,
  selectedFinancing,
  selectedInstallmentTerm,
  calculateInstallmentPerMonth,
}: CheckoutModalProps) {
  // Hitung tax 10% dari harga produk + kamera
  const getSelectedCameraPrice = () => {
    if (!selectedProduct) return 0;
    if (selectedProduct.cameras && selectedProduct.cameras.length > 0) {
      if (selectedProduct.cameras[0].name && selectedFinancing) {
        // Cek kamera yang dipilih dari quantity (asumsi kamera dipilih di parent)
        // Namun, di modal ini tidak ada selectedCameraName, jadi asumsikan kamera 1 jika ada
        // (Jika ingin lebih presisi, tambahkan prop selectedCameraName)
        // Untuk sekarang, ambil harga kamera 1 jika ada
        if (selectedProduct.cameras[0].name === 'Camera 1') return 1000000;
        if (selectedProduct.cameras[1] && selectedProduct.cameras[1].name === 'Camera 2') return 2000000;
      }
    }
    return 0;
  };
  const numericPrice = parseFloat(selectedProduct.price.replace(/[^0-9]/g, ''));
  const cameraPrice = getSelectedCameraPrice();
  const subtotal = numericPrice + cameraPrice;
  const tax = subtotal * 0.1 * quantity;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setShowCheckoutModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          ✕
        </button>
        {/* Left Section: Contact & Shipping Details */}
        <div className="p-8 md:w-3/5">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
              <input type="text" id="fullName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  +62
                </span>
                <input type="text" id="phone" className="flex-1 block w-full border border-gray-300 rounded-r-md py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" placeholder="Preferably WhatsApp" required />
              </div>
            </div>
            <div>
              <label htmlFor="additional" className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea id="additional" rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm"></textarea>
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country *</label>
              <select id="country" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" required>
                <option value="">Select Country</option>
                <option>Indonesia</option>
                <option>United States</option>
                <option>Singapore</option>
                <option>Malaysia</option>
              </select>
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code *</label>
              <input type="text" id="postalCode" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" required />
            </div>
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province *</label>
              <input type="text" id="province" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" required />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City *</label>
              <input type="text" id="city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" required />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address *</label>
              <textarea id="address" rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm" required></textarea>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Shipping Options</h2>
          <div className="space-y-4">
            {/* Standard Shipping */}
            <div 
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                shippingMethod === 'standard' ? 'border-2 border-[#1e3a8a] ring-2 ring-[#1e3a8a]' : 'border border-gray-200 hover:border-gray-300'
              }`} 
              onClick={() => setShippingMethod('standard')}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="shippingMethod"
                  value="standard"
                  checked={shippingMethod === 'standard'}
                  onChange={() => setShippingMethod('standard')}
                  className="form-radio h-5 w-5 accent-[#1e3a8a] focus:ring-[#1e3a8a]"
                />
                <div className="ml-3">
                  <span className="text-lg font-medium">Standard Shipping</span>
                  <p className="text-sm text-gray-600">3-5 business days</p>
                </div>
              </label>
              <span className="text-lg font-medium text-green-700">FREE</span>
            </div>
            {/* Express Shipping */}
            <div 
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                shippingMethod === 'express' ? 'border-2 border-[#1e3a8a] ring-2 ring-[#1e3a8a]' : 'border border-gray-200 hover:border-gray-300'
              }`} 
              onClick={() => setShippingMethod('express')}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="shippingMethod"
                  value="express"
                  checked={shippingMethod === 'express'}
                  onChange={() => setShippingMethod('express')}
                  className="form-radio h-5 w-5 accent-[#1e3a8a] focus:ring-[#1e3a8a]"
                />
                <div className="ml-3">
                  <span className="text-lg font-medium">Express Shipping</span>
                  <p className="text-sm text-gray-600">1-2 business days</p>
                </div>
              </label>
              <span className="text-lg font-medium text-gray-700">Rp250.000</span>
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
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    -
                  </button>
                  <span className="mx-2 font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            {/* Pricing Details */}
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                {selectedFinancing === 'Installment' ? (
                  <span>{`Rp${Math.round(calculateInstallmentPerMonth()).toLocaleString('id-ID')}/Month`}</span>
                ) : (
                  <span>{calculateTotal()}</span>
                )}
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>{shippingMethod === 'standard' ? 'FREE' : 'Rp250.000'}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%)</span>
                <span>{`Rp${Math.round(tax).toLocaleString('id-ID')}`}</span>
              </div>
              
              {/* Tambahkan info installment di bawah tax jika installment dipilih */}
              {selectedFinancing === 'Installment' && (
                <div className="flex justify-between text-gray-700 text-xs">
                  <span>Installment Term:</span>
                  <span>{selectedInstallmentTerm} ({`Rp${Math.round(calculateInstallmentPerMonth()).toLocaleString('id-ID')}`}/Month)</span>
                </div>
              )}
              <div className="border-t border-gray-200 my-4"></div>
              <div className="flex justify-between text-xl font-bold text-[#1e3a8a]">
                <span>Total Due</span>
                <span>{shippingMethod === 'standard' ? calculateTotal() : `Rp${(subtotal * quantity + tax + 250000).toLocaleString('id-ID')}`}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setShowCheckoutModal(false)}
              className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition"
            >
              Back
            </button>
            <button
              onClick={() => {
                if (validateContactAndShippingForm()) {
                  setShowCheckoutModal(false);
                  setShowPaymentModal(true);
                }
              }}
              className="bg-[#1e3a8a] text-white px-6 py-2 rounded hover:bg-blue-800 transition flex items-center"
            >
              Proceed to Payment
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
