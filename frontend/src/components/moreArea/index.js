import React from 'react';
import {
  FaAward,
  FaBuilding,
  FaCar,
  FaConciergeBell,
  FaGasPump,
  FaGraduationCap,
  FaIndustry,
  FaNewspaper,
  FaPills,
  FaShoppingCart,
  FaStore,
  FaTruck,
} from 'react-icons/fa';

export default function MoreArea() {
  return (
    <section
      className="cta__area pb-16 p-relative include-bg jarallax"
      style={{
        background: 'linear-gradient(135deg, #3999ff, #1c7cff)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <div className="pt-4 container">
        <div className="text-white">
          <div className="text-center">
            <h2
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              Available Solutions
            </h2>
          </div>
          <hr
            className="w-75 mx-auto"
            style={{
              borderTop: '3px solid white',
              marginBottom: '20px',
              opacity: 0.8,
            }}
          />
          <div className="icon-grid">
            {[
              { icon: <FaGraduationCap />, title: 'Education' },
              { icon: <FaPills />, title: 'Pharmaceuticals' },
              { icon: <FaIndustry />, title: 'Manufacturing' },
              { icon: <FaAward />, title: 'Government' },
              { icon: <FaCar />, title: 'Automotive' },
              { icon: <FaShoppingCart />, title: 'IT/E-commerce' },
              { icon: <FaTruck />, title: 'Logistics & Transportation' },
              { icon: <FaBuilding />, title: 'Banking Financial Services & Insurance' },
              { icon: <FaConciergeBell />, title: 'Hospitality' },
              { icon: <FaNewspaper />, title: 'Print Media' },
              { icon: <FaStore />, title: 'Retail' },
              { icon: <FaGasPump />, title: 'Oil & Power' },
            ].map((item, index) => (
              <div
                key={index}
                className="icon-container"
                style={{
                  animation: 'fadeInUp 0.8s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                  textAlign: 'center',
                }}
              >
                <div
                  className="icon-wrapper"
                  style={{
                    fontSize: '40px',
                    color: '#fff',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  {item.icon}
                </div>
                <p
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'white',
                    marginTop: '10px',
                    animation: 'textFadeInScale 0.8s ease-out infinite',
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both',
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .icon-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          justify-content: center;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .icon-container:hover .icon-wrapper {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.5);
        }

        .icon-container:hover p {
          color: #ffd700; /* Gold color for the text on hover */
        }

        @media (max-width: 768px) {
          .icon-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
}
