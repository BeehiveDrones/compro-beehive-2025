'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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

  // Removed unused handleChange function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ langsung hardcode di sini
      const serviceID = "service_79nok1g";
      const templateID = "template_zcp4tjv"; 
      const publicKey  = "5dip2MVWHLIJt_nYh";

      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          industry: formData.industry,
          preferredDrone: formData.preferredDrone,
          location:
            formData.location === 'Other'
              ? `Other - ${formData.otherCountry}`
              : 'Indonesia',
          date: formData.date,
          source:
            formData.source === 'Other'
              ? `Other - ${formData.otherSource}`
              : formData.source,
          notes: formData.notes,
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
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
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending email: ' + String(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* fields yang lain tetap sama */}
        {/* ... */}
        
        {/* Submit */}
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
            {isSubmitting ? 'Processing...' : submitSuccess ? 'Thank You!' : 'Submit Request'}
          </motion.button>
        </div>
      </div>
    </motion.form>
  );
}
