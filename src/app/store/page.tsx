'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductDetailModal from './components/ProductDetailModal';
import CheckoutModal from './components/CheckoutModal';
import PaymentMethodModal from './components/PaymentMethodModal';
import PaymentConfirmedModal from './components/PaymentConfirmedModal';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  detailImage1: string;
  detailImage2: string;
  category: string;
  type?: string;
  wingspan?: string;
  endurance?: string;
  range?: string;
  height?: string;
  autonomousMode?: string;
  cameras?: { name: string; description: string }[];
  financingOptions?: string[];
};

const categories = ['All', 'Surveillance', 'Logistics', 'Mapping'];

const products: Product[] = [
  {
    id: 1,
    name: 'BVD-V25',
    description: 'Best Used for Surveillance, Logistics',
    price: 'Rp999.999.999',
    image: '/images/product1.jpg',
    detailImage1: '/images/detilv25.jpg',
    detailImage2: '/images/detilv25.1.jpg',
    category: 'Surveillance',
    type: 'VYTOL',
    wingspan: '2400mm',
    endurance: 'Up To 80 Minutes',
    range: 'Up To 90 Km',
    height: 'Up To 1000 M',
    autonomousMode: 'TKDN 4.1,19M',
    cameras: [
      { name: 'Camera 1', description: 'High resolution 4K camera' },
      { name: 'Camera 2', description: 'Thermal imaging camera' }
    ],
    financingOptions: ['Cash', 'Installment']
  },
  {
    id: 2,
    name: 'BVD-F11',
    description: 'Best Used for Mapping and Surveillance',
    price: 'Rp899.000.000',
    image: '/images/product2.jpg',
    detailImage1: '/images/detilf11.jpg',
    detailImage2: '/images/detilf11.1.jpg',
    category: 'Mapping',
    type: 'Fixed Wing',
    wingspan: '1800mm',
    endurance: 'Up To 60 Minutes',
    range: 'Up To 70 Km',
    height: 'Up To 800 M',
    autonomousMode: 'TKDN 4.0,15M',
    cameras: [
      { name: 'Mapping Camera', description: '20MP survey-grade camera' },
      { name: 'RGB Camera', description: 'Standard color camera' }
    ],
    financingOptions: ['Cash', 'Installment']
  },
  {
    id: 3,
    name: 'BVD-M16A',
    description: 'Best Used for Inspection and Surveillance',
    price: 'Rp1.200.000.000',
    image: '/images/product4.png',
    detailImage1: '/images/detilm16.jpg',
    detailImage2: '/images/detilm16a.jpg',
    category: 'Surveillance',
    type: 'Multi-rotor',
    wingspan: 'N/A',
    endurance: 'Up To 45 Minutes',
    range: 'Up To 10 Km',
    height: 'Up To 500 M',
    autonomousMode: 'TKDN 4.2,20M',
    cameras: [
      { name: 'Zoom Camera', description: '30x optical zoom' },
      { name: 'Multispectral', description: '5-band sensor' }
    ],
    financingOptions: ['Cash', 'Installment']
  },
  {
    id: 4,
    name: 'BVD-V25 Mapping',
    description: 'Best Used for Mapping and Surveillance',
    price: 'Rp1.500.000.000',
    image: '/images/product3.jpg',
    detailImage1: '/images/detilv25m.jpg',
    detailImage2: '/images/detilv25map.jpg',
    category: 'Mapping',
    type: 'VTOL',
    wingspan: '3000mm',
    endurance: 'Up To 50 Minutes',
    range: 'Up To 100 Km',
    height: 'Up To 1500 M',
    autonomousMode: 'TKDN 4.3,25M',
    cameras: [
      { name: 'Cargo Camera', description: 'Cargo monitoring system' }
    ],
    financingOptions: ['Cash', 'Lease']
  },
  {
    id: 5,
    name: 'Quadcopter',
    description: 'Best Used for Mapping and Surveillance',
    price: 'Rp1.800.000.000',
    image: '/images/product5.jpg',
    detailImage1: '/images/detilf11.jpg',
    detailImage2: '/images/detilf11.1.jpg',
    category: 'Mapping',
    type: 'Fixed Wing',
    wingspan: '2200mm',
    endurance: 'Up To 90 Minutes',
    range: 'Up To 120 Km',
    height: 'Up To 2000 M',
    autonomousMode: 'TKDN 4.5,30M',
    cameras: [
      { name: 'Lidar', description: 'High precision lidar sensor' },
      { name: 'Survey Camera', description: '42MP full-frame camera' }
    ],
    financingOptions: ['Cash', 'Installment']
  },
  {
    id: 6,
    name: 'Hexacopter',
    description: 'Best Used for Mapping and Surveillance',
    price: 'Rp750.000.000',
    image: '/images/product6.jpg',
    detailImage1: '/images/detilf11.jpg',
    detailImage2: '/images/detilf11.1.jpg',
    category: 'Surveillance',
    type: 'Quadcopter',
    wingspan: 'N/A',
    endurance: 'Up To 30 Minutes',
    range: 'Up To 15 Km',
    height: 'Up To 500 M',
    autonomousMode: 'TKDN 3.9,12M',
    cameras: [
      { name: 'Night Vision', description: 'Low-light capable camera' },
      { name: 'Wide Angle', description: '180° field of view' }
    ],
    financingOptions: ['Cash']
  }
];

// ProductItem component definition
function ProductItem({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
          <span className="font-bold text-[#1e3a8a] whitespace-nowrap ml-2">{product.price || 'N/A'}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
<button 
  className="text-blue-600 bg-white border shadow-blue-800 hover:bg-blue-800 hover:text-white hover:border-blue-300 font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-200"
  onClick={(e) => {
    e.stopPropagation();
    onClick();
  }}
>
  View Details 
</button>
        </div>
      </div>
    </div>
  );
}

function getSelectedCameraPrice(selectedCameraName: string | null): number {
  if (selectedCameraName === 'Camera 1') return 1000000;
  if (selectedCameraName === 'Camera 2') return 2000000;
  return 0;
}

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFinancing, setSelectedFinancing] = useState('Cash');
  const [selectedInstallmentTerm, setSelectedInstallmentTerm] = useState('12 Months');
  const [selectedCameraName, setSelectedCameraName] = useState<string | null>(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Credit/Debit Card');
  const [showPaymentConfirmedModal, setShowPaymentConfirmedModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedFinancing(selectedProduct.financingOptions?.[0] || 'Cash');
      setSelectedInstallmentTerm('12 Months');
      if (selectedProduct.cameras && selectedProduct.cameras.length > 0) {
        setSelectedCameraName(selectedProduct.cameras[0].name);
      } else {
        setSelectedCameraName(null);
      }
    }
  }, [selectedProduct]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  // Apply search filter
  const searchedProducts = searchQuery
    ? filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : filteredProducts;

  // Apply sorting
  const sortedProducts = [...searchedProducts].sort((a, b) => {
    if (sortOption === 'price-low') {
      return parseFloat(a.price.replace(/[^\d]/g, '')) - parseFloat(b.price.replace(/[^\d]/g, ''));
    } else if (sortOption === 'price-high') {
      return parseFloat(b.price.replace(/[^\d]/g, '')) - parseFloat(a.price.replace(/[^\d]/g, ''));
    } else if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0; // default order
  });

  const installmentTerms = ['3 Months', '6 Months', '12 Months'];
  

{(() => {
  const today = new Date();
  const futureDate = new Date();
  const minDays = shippingMethod === 'standard' ? 3 : 1;
  const maxDays = shippingMethod === 'standard' ? 5 : 2;
  
  futureDate.setDate(today.getDate() + maxDays);
  const earlierDate = new Date();
  earlierDate.setDate(today.getDate() + minDays);

  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

  if (earlierDate.getMonth() === futureDate.getMonth()) {
    return `${earlierDate.getDate()}–${futureDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}`;
  } else {
    return `${earlierDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })} – ${futureDate.toLocaleDateString('en-US', options)}`;
  }
})()}

  const validateContactAndShippingForm = () => {
    const fullName = (document.getElementById('fullName') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value;
    const country = (document.getElementById('country') as HTMLSelectElement)?.value;
    const postalCode = (document.getElementById('postalCode') as HTMLInputElement)?.value;
    const province = (document.getElementById('province') as HTMLInputElement)?.value;
    const address = (document.getElementById('address') as HTMLTextAreaElement)?.value;
    const city = (document.getElementById('city') as HTMLInputElement)?.value;

    if (!fullName || !email || !phone || !country || !postalCode || !province || !address || !city) {
      alert('Please fill in all required contact and shipping details.');
      return false;
    }
    return true;
  };

  const handlePaymentConfirmation = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowPaymentModal(false);
      setShowPaymentConfirmedModal(true);
    }, 1500);
  };

  const calculateTotal = () => {
    if (!selectedProduct) return 'Rp0';
    
    // Extract numeric price (remove currency symbols and commas)
    const numericPrice = parseFloat(selectedProduct.price.replace(/[^\d]/g, ''));
    const cameraPrice = getSelectedCameraPrice(selectedCameraName);
    const total = (numericPrice + cameraPrice) * quantity;
    
    // Format back to currency
    return `Rp${total.toLocaleString('id-ID')}`;
  };

  const calculateInstallmentPerMonth = () => {
    if (!selectedProduct) return 0;
    const numericPrice = parseFloat(selectedProduct.price.replace(/[^ 9]/g, ''));
    const cameraPrice = getSelectedCameraPrice(selectedCameraName);
    const total = (numericPrice + cameraPrice) * quantity;
    let months = 12;
    if (selectedInstallmentTerm === '3 Months') months = 3;
    else if (selectedInstallmentTerm === '6 Months') months = 6;
    else if (selectedInstallmentTerm === '12 Months') months = 12;
    return total / months;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-6 md:py-20 text-center  bg-gradient-to-b from-blue-950 to-blue-800 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-10">BVD Drone Store</h1>
        <p className="text-xl opacity-90">High quality drones for professional use</p>
        
        {/* Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search drones..."
            className="w-full px-6 py-3 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="lg:w-1/6">
            <div className="p-4 bg-white rounded-lg shadow-sm sticky top-4">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Filter by</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === cat
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="lg:w-5/6">
            {/* Sorting and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                Showing <span className="font-medium">{sortedProducts.length}</span> results
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm text-gray-600">Sort by:</label>
                <select
                  id="sort"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you re looking for.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reset filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && !showCheckoutModal && !showPaymentModal && !showPaymentConfirmedModal && (
        <ProductDetailModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          quantity={quantity}
          setQuantity={setQuantity}
          selectedCameraName={selectedCameraName}
          setSelectedCameraName={setSelectedCameraName}
          selectedFinancing={selectedFinancing}
          setSelectedFinancing={setSelectedFinancing}
          selectedInstallmentTerm={selectedInstallmentTerm}
          setSelectedInstallmentTerm={setSelectedInstallmentTerm}
          installmentTerms={installmentTerms}
          calculateTotal={calculateTotal}
          setShowCheckoutModal={setShowCheckoutModal}
          calculateInstallmentPerMonth={calculateInstallmentPerMonth}
        />
      )}

      {/* Checkout Modal */}
      {showCheckoutModal && selectedProduct && (
        <CheckoutModal
          selectedProduct={selectedProduct}
          setShowCheckoutModal={setShowCheckoutModal}
          setShowPaymentModal={setShowPaymentModal}
          shippingMethod={shippingMethod}
          setShippingMethod={setShippingMethod}
          quantity={quantity}
          setQuantity={setQuantity}
          calculateTotal={calculateTotal}
          validateContactAndShippingForm={validateContactAndShippingForm}
          selectedFinancing={selectedFinancing}
          selectedInstallmentTerm={selectedInstallmentTerm}
          calculateInstallmentPerMonth={calculateInstallmentPerMonth}
        />
      )}

      {/* Payment Method Modal */}
      {showPaymentModal && selectedProduct && (
        <PaymentMethodModal
          selectedProduct={selectedProduct}
          setShowPaymentModal={setShowPaymentModal}
          setShowCheckoutModal={setShowCheckoutModal}
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
          quantity={quantity}
          shippingMethod={shippingMethod}
          calculateTotal={calculateTotal}
          handlePaymentConfirmation={handlePaymentConfirmation}
          isLoading={isLoading}
        />
      )}

      {/* Payment Confirmed Modal */}
      {showPaymentConfirmedModal && selectedProduct && (
        <PaymentConfirmedModal
          selectedProduct={selectedProduct}
          setShowPaymentConfirmedModal={setShowPaymentConfirmedModal}
          setSelectedProduct={setSelectedProduct}
          quantity={quantity}
          shippingMethod={shippingMethod}
          calculateTotal={calculateTotal}
          selectedPaymentMethod={selectedPaymentMethod}
          calculateInstallmentPerMonth={calculateInstallmentPerMonth}
        />
      )}
    </main>
  );
}