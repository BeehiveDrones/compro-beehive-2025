import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

interface CommitmentCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

export default function CommitmentCard({ icon, title, description, delay }: CommitmentCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-lg h-90 ml-20 mr-10 shadow-md shadow-blue-500 p-6 text-center flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
        <h3 className="text-lg font-semibold text-black mb-4">{title}</h3>
        <div className="relative w-30 h-30 mb-4">
          <Image src={icon} alt={`${title} Icon`} layout="fill" objectFit="contain" />
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </AnimatedSection>
  );
} 