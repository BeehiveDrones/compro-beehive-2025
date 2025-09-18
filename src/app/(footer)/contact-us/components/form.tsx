'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export type FormFields = {
  name: string;
  whatsapp: string;
  email: string;
  address: string;
  productService: string;
  industry: string;
  requirements: string;
  time: string;
};

export default function Form() {
  const [form, setForm] = useState<FormFields>({
    name: '',
    whatsapp: '',
    email: '',
    address: '',
    productService: '',
    industry: '',
    requirements: '',
    time: new Date().toLocaleString(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceID = "service_79nok1g";
      const templateID = "template_8j5bsiu";
      const publicKey  = "5dip2MVWHLIJt_nYh";

      const formData = {
        ...form,
        time: new Date().toLocaleString(),
        message: form.requirements,
      };

      await emailjs.send(serviceID, templateID, formData, publicKey);

      setSubmitSuccess(true);
      setForm({
        name: '',
        whatsapp: '',
        email: '',
        address: '',
        productService: '',
        industry: '',
        requirements: '',
        time: new Date().toLocaleString(),
      });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDropdownSelected = form.productService !== '' || form.industry !== '';

  return (
    <div>
      <h2 className="text-2xl font-bold font-exo2 mb-1">Drop Us a Line</h2>
      <p className="mb-6 text-gray-700 font-open-sans">
        Consult with us about your needs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 font-open-sans">
        {/* Input text */}
        {(['name', 'whatsapp', 'email', 'address'] as (keyof FormFields)[]).map(
          (field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block font-semibold mb-1 capitalize"
              >
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full border border-[#1e3a8a] p-2 rounded outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                required
              />
            </div>
          )
        )}

        {/* Dropdown bersebelahan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Dropdown Product & Services */}
          <div>
            <label className="block font-semibold mb-1" htmlFor="productService">
              Product & Services
            </label>
            <select
              name="productService"
              value={form.productService}
              onChange={handleChange}
              className={`w-full border p-2 rounded outline-none focus:ring-2 focus:ring-[#1e3a8a] ${
                form.productService ? 'bg-blue-100 border-blue-500' : 'border-[#1e3a8a]'
              }`}
              required
            >
              <option value="">Select</option>
              <option value="Drone Service">Drone Service</option>
              <option value="Advance Manufacturing">Advance Manufacturing</option>
              <option value="Training">Training</option>
              <option value="R&D Service">R&D Service</option>
            </select>
          </div>

          {/* Dropdown Industry */}
          <div>
            <label className="block font-semibold mb-1" htmlFor="industry">
              Industry
            </label>
            <select
              name="industry"
              value={form.industry}
              onChange={handleChange}
              className={`w-full border p-2 rounded outline-none focus:ring-2 focus:ring-[#1e3a8a] ${
                form.industry ? 'bg-blue-100 border-blue-500' : 'border-[#1e3a8a]'
              }`}
              required
            >
              <option value="">Select</option>
              <option value="Forestry">Forestry</option>
              <option value="Agriculture & Plantation">Agriculture & Plantation</option>
              <option value="Mining & Minerals">Mining & Minerals</option>
              <option value="Construction & Real Estate">Construction & Real Estate</option>
            </select>
          </div>
        </div>

        {/* Requirements muncul dengan transisi */}
        <AnimatePresence>
          {isDropdownSelected && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block font-semibold mb-1" htmlFor="requirements">
                Requirements
              </label>
              <textarea
                name="requirements"
                value={form.requirements}
                onChange={handleChange}
                className="w-full border border-[#1e3a8a] p-2 rounded h-32 resize-none outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                required
              />
            </motion.div>
          )}
        </AnimatePresence>

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
            {isSubmitting
              ? 'Processing...'
              : submitSuccess
              ? 'Thank You!'
              : 'Submit Request'}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
