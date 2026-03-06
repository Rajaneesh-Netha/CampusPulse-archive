import './Features.css';

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div className="feature-card" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <div className="feature-glow"></div>
    </div>
  );
};

import { FaPencilAlt, FaBrain, FaClock, FaUserSecret } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaPencilAlt />,
      title: 'Easy Complaint Submission',
      description: 'Students can quickly report issues related to hostel, academics, maintenance, or safety through a simple interface.'
    },
    {
      icon: <FaBrain />,
      title: 'AI-Powered Complaint Categorization',
      description: 'The system automatically classifies complaints using AI to ensure faster and more accurate handling.'
    },
    {
      icon: <FaClock />,
      title: 'Real-Time Complaint Tracking',
      description: 'Students can track the status of their complaints and receive updates until the issue is resolved.'
    },
    {
      icon: <FaUserSecret />,
      title: 'Anonymous Feedback Option',
      description: 'Users can submit complaints anonymously while the system detects spam or duplicate reports using AI.'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header" data-aos="fade-down">
          <h2 className="features-title">Features We Provide</h2>
          <p className="features-subtitle">Everything you need to make your voice heard</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      <div className="features-background">
        <div className="gradient-blur blur-1"></div>
        <div className="gradient-blur blur-2"></div>
      </div>
    </section>
  );
}
