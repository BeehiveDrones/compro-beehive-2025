'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export type FormFields = {
  name: string;
  whatsapp: string;
  email: string;
  address: string;
  requirements: string;
  time: string;
};

export default function Form() {
  const [form, setForm] = useState<FormFields>({
    name: '',
    whatsapp: '',
    email: '',
    address: '',
    requirements: '',
    time: new Date().toLocaleString(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // langsung hardcode ID di sini
      const serviceID = "service_79nok1g";
      const templateID = "template_8j5bsiu";
      const publicKey  = "5dip2MVWHLIJt_nYh";

      // update time setiap submit
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
        requirements: '',
        time: new Date().toLocaleString(),
      });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold font-exo2 mb-1">Drop Us a Line</h2>
      <p className="mb-6 text-gray-700 font-open-sans">
        Consult with us about your needs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 font-open-sans">
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

        <div>
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
        </div>

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
