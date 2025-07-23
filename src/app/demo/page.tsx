'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DemoDroneForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    preferredDrone: '',
    location: 'Indonesia',
    otherCountry: '',
    date: '',
    source: 'Social Media',
    otherSource: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'radio' ? value : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          preferredDrone: '',
          location: 'Indonesia',
          otherCountry: '',
          date: '',
          source: 'Social Media',
          otherSource: '',
          notes: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20 text-[#1e3a8a] min-h-screen overflow-hidden">
      {/* Background image with gradients */}
      <div className="absolute bottom-0 right-0 w-full h-full md:w-1/2">
        <Image
          src="/images/form.jpg"
          alt="Demo Drone"
          fill
          className="object-cover object-left"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Deskripsi />

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['fullName', 'email', 'phone', 'company', 'industry'].map((field) => (
              <motion.div
                key={field}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  name={field}
                  onChange={handleChange}
                  value={formData[field as keyof typeof formData] as string}
                  placeholder={
                    field === 'fullName' ? 'Full Name' :
                    field === 'email' ? 'Email Address' :
                    field === 'phone' ? 'Phone Number' :
                    field === 'company' ? 'Company/Organization' : 'Industry/Use Case'
                  }
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/50 transition"
                  required
                />
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <select 
                name="preferredDrone" 
                onChange={handleChange} 
                value={formData.preferredDrone}
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/50 transition"
                required
              >
                <option value="">Preferred Drone</option>
                <option value="Mapping Drone">Mapping Drone</option>
                <option value="Spraying Drone">Spraying Drone</option>
                <option value="Inspection Drone">Inspection Drone</option>
              </select>
            </motion.div>

            <motion.div 
              className="border-2 border-gray-200 p-3 rounded-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block font-semibold mb-2">Demo Location</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value="Indonesia"
                    checked={formData.location === 'Indonesia'}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#1e3a8a] focus:ring-[#1e3a8a] "
                  />
                  <span className="ml-2">Indonesia</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value="Other"
                    checked={formData.location === 'Other'}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                  <span className="ml-2">Other Country</span>
                </label>
                {formData.location === 'Other' && (
                  <input
                    type="text"
                    name="otherCountry"
                    value={formData.otherCountry}
                    onChange={handleChange}
                    placeholder="Specify country"
                    className="mt-1 w-full border-2 border-gray-200 p-2 rounded-lg"
                    required
                  />
                )}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block font-semibold mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={formData.date}
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/50"
                required
              />
            </motion.div>

            <motion.div 
              className="md:col-span-2 border-2 border-gray-200 p-3 rounded-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block font-semibold mb-2">How Did You Hear About Beehive Drones</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Social Media', 'Google Search', 'Friend or Colleague', 'Event Exhibition', 'Other'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="source"
                      value={option}
                      checked={formData.source === option}
                      onChange={handleChange}
                      className="h-4 w-4 accent-[#1e3a8a] focus:ring-[#1e3a8a]"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
              {formData.source === 'Other' && (
                <input
                  type="text"
                  name="otherSource"
                  value={formData.otherSource}
                  onChange={handleChange}
                  placeholder="Please specify"
                  className="mt-2 w-full border-2 border-gray-200 p-2 rounded-lg"
                  required
                />
              )}
            </motion.div>

            <motion.div 
              className="md:col-span-2"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block font-semibold mb-2">Special Request or Notes</label>
              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/50"
              />
            </motion.div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg text-white font-semibold ${
                  isSubmitting ? 'bg-gray-400' : 'bg-[#1e3a8a] hover:bg-[#15337a]'
                } transition-all duration-300 flex items-center gap-2`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : submitSuccess ? (
                  'Thank You!'
                ) : (
                  'Submit Request'
                )}
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Deskripsi() {
  return (
    <motion.section 
      className="text-[#1e3a8a] mb-8 md:mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-2 mt-10"
        whileHover={{ scale: 1.01 }}
      >
        Demo Drone
      </motion.h1>
      <motion.h2 
        className="text-xl md:text-2xl font-semibold mb-4 "
        whileHover={{ scale: 1.01 }}
      >
        See Beehive Drones in Action!
      </motion.h2>
      <motion.p 
        className="text-sm md:text-base text-gray-700"
        whileHover={{ scale: 1.01 }}
      >
        Discover how our advanced drone technology can enhance your operations. Whether you need aerial mapping, 
        surveillance, inspection, spraying, or customized drone solutions, Beehive Drones delivers precision and 
        efficiency across industries. Fill out the form below to request a drone demo, and our team will reach out 
        soon to schedule a session tailored to your needs. Experience the future of drone technology firsthand! 
        Request your demo today!
      </motion.p>
    </motion.section>
  );
}