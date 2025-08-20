import Image from 'next/image';
import { Product } from '../page';
import { useState } from 'react';

interface ProductDetailModalProps {
  selectedProduct: Product;
  setSelectedProduct: (product: Product | null) => void;
  quantity: number;
  setQuantity: (qty: number) => void;
  selectedCameraName: string | null;
  setSelectedCameraName: (name: string) => void;
  selectedFinancing: string;
  setSelectedFinancing: (option: string) => void;
  selectedInstallmentTerm: string;
  setSelectedInstallmentTerm: (term: string) => void;
  installmentTerms: string[];
  calculateTotal: () => string;
  setShowCheckoutModal: (show: boolean) => void;
  calculateInstallmentPerMonth: () => number;
}

export default function ProductDetailModal({
  selectedProduct,
  setSelectedProduct,
  quantity,
  setQuantity,
  selectedCameraName,
  setSelectedCameraName,
  selectedFinancing,
  setSelectedFinancing,
  selectedInstallmentTerm,
  setSelectedInstallmentTerm,
  installmentTerms,
  calculateTotal,
  setShowCheckoutModal,
  calculateInstallmentPerMonth,
}: ProductDetailModalProps) {
  const [mainImage, setMainImage] = useState(selectedProduct.image);

  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-xl relative">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image - Left Side */}
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={mainImage}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain"
                  style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
                />
              </div>
              {/* Image Gallery (Placeholder) */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[selectedProduct.image, selectedProduct.detailImage1, selectedProduct.detailImage2]
                  .filter(Boolean)
                  .map((imgSrc, i) => (
                    <div
                      key={i}
                      className={`relative aspect-square bg-gray-200 rounded cursor-pointer hover:ring-2 hover:ring-blue-500 ${mainImage === imgSrc ? 'ring-2 ring-blue-700' : ''}`}
                      onClick={() => setMainImage(imgSrc)}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${selectedProduct.name} ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
            {/* Product Details - Right Side */}
            <div className="md:w-1/2">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
              {/* Product Title */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a8a]">{selectedProduct.name}</h2>
                  <p className="text-gray-600 mt-1">{selectedProduct.description}</p>
                </div>
              </div>
              {/* Quantity Selector */}
              <div className="mt-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <div className="flex items-center">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-t border-b border-gray-300 py-1"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Specifications */}
              <div className="mt-6 space-y-2">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500">Type</span>
                    <span className="block font-medium ">{selectedProduct.type || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Wingspan</span>
                    <span className="block font-medium">{selectedProduct.wingspan || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Flight Endurance</span>
                    <span className="block font-medium">{selectedProduct.endurance || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Flight Range</span>
                    <span className="block font-medium">{selectedProduct.range || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Flight Height</span>
                    <span className="block font-medium">{selectedProduct.height || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Autonomous Mode</span>
                    <span className="block font-medium">{selectedProduct.autonomousMode || 'N/A'}</span>
                  </div>
                </div>
              </div>
              {/* Include Section */}
              {selectedProduct.include && selectedProduct.include.length > 0 && (
                <div className="mt-6 space-y-2">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Include</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProduct.include.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Choose Camera Section */}
              {selectedProduct.name === 'BVD-V25' && selectedProduct.cameras && selectedProduct.cameras.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-lg text-[#1e3a8a] mb-2">Camera Options</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProduct.cameras?.map((camera: { name: string; description: string }, index: number) => {
                      let cameraPrice = '';
                      if (index === 0) cameraPrice = 'Rp279.300.000';
                      if (index === 1) cameraPrice = 'Rp575.100.000';
                      return (
                        <div
                          key={index}
                          className={`border rounded p-3 relative cursor-pointer transition-all duration-200
                            ${selectedCameraName === camera.name ? 'border-[#1e3a8a] ring-2 ring-[#1e3a8a]' : 'border-gray-200 hover:border-gray-300'}`}
                          onClick={() => setSelectedCameraName(camera.name)}
                        >
                          <div className="flex items-start">
                            <div className={`mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center
                              ${selectedCameraName === camera.name ? 'border-[#1e3a8a]' : 'border-gray-400'}`}>
                              {selectedCameraName === camera.name && (
                                <div className="w-2.5 h-2.5 rounded-full bg-[#1e3a8a]"></div>
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{camera.name}</h4>
                              {cameraPrice && (
                                <p className="text-xs text-green-700 font-semibold mb-1">{cameraPrice}</p>
                              )}
                              <p className="text-sm text-gray-600">{camera.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* Financing Options */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-[#1e3a8a] mb-4">Financing Option</h3>
                {/* Financing Tabs */}
                <div className="flex border-b border-gray-200 mb-4">
                  {selectedProduct.financingOptions?.map((option: string) => (
                    <button
                      key={option}
                      className={`px-4 py-2 font-medium relative ${selectedFinancing === option ? 'text-[#1e3a8a]' : 'text-gray-500 hover:text-gray-700'}`}
                      onClick={() => setSelectedFinancing(option)}
                    >
                      {option}
                      {selectedFinancing === option && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e3a8a]"></div>
                      )}
                    </button>
                  ))}
                </div>
                {/* Cash Option */}
                {selectedFinancing === 'Cash' && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-2xl font-bold text-[#1e3a8a]">{selectedProduct.price}</p>
                      <p className="text-sm text-gray-600 mt-1">Cash price for the drone</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <p className="text-xl font-bold text-[#1e3a8a]">Total: {calculateTotal()}</p>
                      </div>
                      <button
                        className="w-full sm:w-auto bg-[#1e3a8a] text-white px-6 py-3 rounded hover:bg-blue-800 transition flex items-center justify-center"
                        onClick={() => setShowCheckoutModal(true)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Order Now
                      </button>
                    </div>
                  </div>
                )}
                {/* Installment Option */}
                {selectedFinancing === 'Installment' && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-300 relative">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-2xl font-bold text-[#1e3a8a]">{`Rp${Math.round(calculateInstallmentPerMonth()).toLocaleString('id-ID')}/Month`}</p>
                        <div className="w-6 h-6 rounded-full border-2 border-[#1e3a8a] flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1e3a8a]"></div>
                        </div>
                      </div>
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          
                          <p className="text-sm text-gray-600">Down Payment (99%)</p>
                          <p className="text-lg font-bold text-black">Rp999.999.999</p>
                        </div>
                        <div className="flex-shrink-0 w-32">
                          <p className="text-sm text-gray-500 mb-1">Term</p>
                          <select
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1e3a8a] focus:border-[#1e3a8a] sm:text-sm rounded-md"
                            value={selectedInstallmentTerm}
                            onChange={(e) => setSelectedInstallmentTerm(e.target.value)}
                          >
                            {installmentTerms.map((term) => (
                              <option key={term} value={term}>
                                {term}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <p className="text-xl font-bold text-[#1e3a8a]">Total: {calculateTotal()}</p>
                      </div>
                      <button
                        className="w-full sm:w-auto bg-[#1e3a8a] text-white px-6 py-3 rounded hover:bg-blue-800 transition flex items-center justify-center"
                        onClick={() => setShowCheckoutModal(true)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Order Now
                      </button>
                    </div>
                  </div>
                )}
                {/* Lease Option */}
                {selectedFinancing === 'Lease' && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-2xl font-bold text-[#1e3a8a]">Contact for Lease Details</p>
                      <p className="text-sm text-gray-600 mt-1">Flexible leasing options available upon request.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <p className="text-xl font-bold text-[#1e3a8a]">Starting from RpX.XXX.XXX/month</p>
                      <button
                        className="w-full sm:w-auto bg-[#1e3a8a] text-white px-6 py-3 rounded hover:bg-blue-800 transition flex items-center justify-center"
                        onClick={() => setShowCheckoutModal(true)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Inquire About Lease
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 