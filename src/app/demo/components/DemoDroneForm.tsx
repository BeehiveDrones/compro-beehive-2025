// app/demo/components/DemoDroneForm.tsx
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Hardcode EmailJS config
      const serviceID = "service_79nok1g";
      const templateID = "template_zcp4tjv";
      const publicKey = "5dip2MVWHLIJt_nYh";

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
        {['fullName', 'email', 'phone', 'company', 'industry'].map((field) => (
          <motion.div key={field} whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 300 }}>
            <input
              name={field}
              onChange={handleChange}
              value={formData[field as keyof typeof formData] as string}
              placeholder={
                field === 'fullName'
                  ? 'Full Name'
                  : field === 'email'
                  ? 'Email Address'
                  : field === 'phone'
                  ? 'Phone Number'
                  : field === 'company'
                  ? 'Company/Organization'
                  : 'Industry/Use Case'
              }
              className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/50 transition"
              required
            />
          </motion.div>
        ))}

        {/* Preferred Drone */}
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 300 }}>
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
            <option value="Surveillance Drone">Surveillance Drone</option>
            <option value="pollination drone">pollination drone</option>
          </select>
        </motion.div>

        {/* Location */}
        <motion.div className="border-2 border-gray-200 p-3 rounded-lg" whileHover={{ scale: 1.01 }}>
          <label className="block font-semibold mb-2">Demo Location</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="location"
                value="Indonesia"
                checked={formData.location === 'Indonesia'}
                onChange={handleChange}
                className="h-4 w-4 accent-[#1e3a8a]"
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
                className="h-4 w-4 accent-[#1e3a8a]"
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

        {/* Preferred Date */}
        <motion.div whileHover={{ scale: 1.01 }}>
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

        {/* Source */}
        <motion.div className="md:col-span-2 border-2 border-gray-200 p-3 rounded-lg" whileHover={{ scale: 1.01 }}>
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
                  className="h-4 w-4 accent-[#1e3a8a]"
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

        {/* Notes */}
        <motion.div className="md:col-span-2" whileHover={{ scale: 1.01 }}>
          <label className="block font-semibold mb-2">Special Request or Notes</label>
          <textarea
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-[#1e3a8a]"
          />
        </motion.div>

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
