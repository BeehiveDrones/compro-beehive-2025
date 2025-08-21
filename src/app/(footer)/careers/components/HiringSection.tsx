import AnimatedSection from './AnimatedSection';
import JobModal from './JobModal';
import { useState } from 'react';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  fullDescription?: string;
  requirements?: string[];
  Qualification: string[];
  Benefits :string[];
  applyLink?: string;
}

interface JobCardProps {
  job: Job;
  onReadMore: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onReadMore }) => {
  return (
    <div className="bg-white border  border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold font-exo-2 text-[#1e3a8a] mb-2">{job.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-open-sans font-medium px-2 py-0.5 rounded">
            {job.location}
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-open-sans font-medium px-2 py-0.5 rounded">
            {job.type}
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed font-open-sans text-justify mb-4">
          {job.shortDescription}
        </p>
      </div>
      <div className="text-right">
        <button
          onClick={() => onReadMore(job)}
          className="inline-flex items-center font-poppins bg- text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function HiringSection() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobPostings: Job[] = [
    {
      id: '1',
      title: 'Procurement Staff',
      location: 'Pakem, Yogyakarta',
      type: 'Work From Office',
      shortDescription: 'We’re looking for a detail-oriented and proactive individual to join our team as Procurement Staff',
      fullDescription: 'We are seeking a passionate and driven UI/UX Design Intern to join our dynamic team. This internship offers a unique opportunity to contribute to real-world projects, working alongside experienced designers and developers. You will gain hands-on experience in user research, wireframing, prototyping, and user interface design. We are looking for someone eager to learn, with a strong portfolio showcasing their design skills and a keen eye for detail. This is an excellent opportunity to kickstart your career in product design.',
      requirements: [
        'Handle purchasing processes and vendor coordination',
'Ensure timely and cost-effective procurement',
      ],
      Qualification: [
        'Minimum education: Vocational High School (SMK) in any major',
'Male or female',
'At least 1 year of experience in procurement or purchasing',
'Strong negotiation skills and understanding of purchasing procedures',
'Able to read and understand technical specifications of requested goods/services',
'Proficient in Microsoft Office (Word, Excel, PowerPoint)',
'Excellent communication, coordination, and teamwork skills',
'Honest, detail-oriented, and high integrity',
      ],
    Benefits : ['BPJS Employment & Health Insurance',
'Annual leave and national holidays',
'Work-from-home flexibility',
'5-day workweek'],
      applyLink: "https://wa.me/6287777257911"
    },
  //   {
  //     id: 'front-end-dev-1',
  //     title: 'Internship Front-End Developer',
  //     location: 'Yogyakarta',
  //     type: 'Remote',
  //     shortDescription: 'Looking to gain hands-on experience in digital product design? Join Company Name as a UI/UX Design Intern and develop your skills in a real-world professional environment!',
  //     fullDescription: 'Join our innovative team as an Internship Front-End Developer! You will work on exciting projects, building responsive and user-friendly interfaces using modern web technologies. This role provides an excellent opportunity to learn from experienced developers, contribute to real products, and grow your skills in a fast-paced environment. We are looking for someone with a foundational understanding of web development and a strong desire to learn more.',
  //     requirements: [
  //       'Currently enrolled in or recently graduated from a Computer Science or related field.',
  //       'Basic understanding of HTML, CSS, and JavaScript.',
  //       'Familiarity with a modern JavaScript framework (e.g., React, Vue, Angular) is a plus.',
  //       'Ability to write clean, maintainable, and well-documented code.',
  //       'Strong problem-solving skills and attention to detail.',
  //     ],
  //     responsibilities: [
  //       'Develop and maintain user-facing features using modern front-end technologies.',
  //       'Collaborate with UI/UX designers to translate designs into interactive user interfaces.',
  //       'Optimize applications for maximum speed and scalability.',
  //       'Participate in code reviews and contribute to team discussions.',
  //       'Debug and troubleshoot front-end issues.',
  //     ],
  //     applyLink: 'mailto:careers@beehivedrones.com?subject=Application for Internship Front-End Developer'
  //   },
  ];

  const handleReadMore = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <section className="container mx-auto px-10 py-12 md:py-16 bg-white">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-12">We are Hiring</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobPostings.map((job) => (
          <AnimatedSection key={job.id} delay={100}> 
            <JobCard job={job} onReadMore={handleReadMore} />
          </AnimatedSection>
        ))}
      </div>
      <JobModal job={selectedJob} onClose={handleCloseModal} />
    </section>
  );
}
