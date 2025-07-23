'use client';
import React from 'react';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  fullDescription?: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  applyLink?: string;
  duration?: string;
}

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
}

const defaultBenefits = [
  'Direct mentorship from senior designers.',
  'Certificate + professional reference upon completion.',
  'Potential full-time employment opportunity.'
];

const defaultResponsibilities = [
  'Assist in user research and wireframe creation.',
  'Design digital interfaces (web/app) using Figma or Adobe XD.',
  'Collaborate with developers and product managers.'
];

const defaultRequirements = [
  'Current student (min. 5th semester) or recent graduate in any field.',
  'Basic understanding of UX principles and design tools (Figma/Adobe XD).',
  'Portfolio (academic or personal projects accepted).'
];

export default function JobModal({ job, onClose }: JobModalProps) {
  if (!job) return null;

  // Fallbacks for demo
  const benefits = job.benefits && job.benefits.length > 0 ? job.benefits : defaultBenefits;
  const responsibilities = job.responsibilities && job.responsibilities.length > 0 ? job.responsibilities : defaultResponsibilities;
  const requirements = job.requirements && job.requirements.length > 0 ? job.requirements : defaultRequirements;
  const duration = job.duration || '3-6 months (flexible)';
  const location = job.location || 'Hybrid (Yogyakarta Office + Remote)';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-40 backdrop-blur-sm p-2 sm:p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-5xl min-h-[60vh] max-h-[95vh] flex flex-col p-2 sm:p-4 md:p-8 overflow-y-auto animate-fadeIn">
        {/* Header */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-2 break-words">{job.title}</h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg break-words">
            {job.shortDescription}
          </p>
        </div>
        {/* Position Details */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1e3a8a] mb-4">Position Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Responsibilities kiri */}
            <div>
              <div className="mb-4">
                <span className="font-bold">Responsibilities:</span>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
                  {responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Location & Duration tampilan desktop */}
              <div className="hidden md:flex flex-col gap-2 mt-8 sm:mt-20">
                <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm md:text-base">
                  <FaMapMarkerAlt className="text-[#1e3a8a]" />
                  <span className="font-medium">Location</span>
                  <span className="ml-1">: {location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm md:text-base">
                  <FaRegClock className="text-[#1e3a8a]" />
                  <span className="font-medium">Duration</span>
                  <span className="ml-1">: {duration}</span>
                </div>
              </div>
            </div>
            {/* Benefits & Requirements kanan */}
            <div>
              <div className="mb-4">
                <span className="font-bold">Benefits:</span>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
                  {benefits.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <span className="font-bold">Requirements:</span>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
                  {requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Location & Duration hanya di mobile */}
              <div className="flex flex-col gap-2 mt-6 md:hidden">
                <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm md:text-base">
                  <FaMapMarkerAlt className="text-[#1e3a8a]" />
                  <span className="font-medium">Location</span>
                  <span className="ml-1">: {location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm md:text-base">
                  <FaRegClock className="text-[#1e3a8a]" />
                  <span className="font-medium">Duration</span>
                  <span className="ml-1">: {duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-8 sm:mt-10 w-full">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-400 rounded bg-white text-gray-700 hover:bg-gray-100 font-semibold transition w-full sm:w-auto"
          >
            Back
          </button>
          <a
            href={`https://wa.me/6281234567890?text=Halo%20HR%20Beehive%20Drones,%20saya%20ingin%20melamar%20posisi%20${encodeURIComponent(job.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded bg-[#1e3a8a] text-white font-semibold hover:bg-blue-900 transition w-full sm:w-auto text-center"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
