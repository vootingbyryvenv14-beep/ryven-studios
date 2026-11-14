import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const handleTouchClick = (container: HTMLDivElement) => {
      container.classList.toggle("what-content-active");
      container.classList.remove("what-sibling");
      if (container.parentElement) {
        Array.from(container.parentElement.children).forEach((sibling) => {
          if (sibling !== container) {
            sibling.classList.remove("what-content-active");
            sibling.classList.toggle("what-sibling");
          }
        });
      }
    };
    const handlers = new Map<HTMLDivElement, () => void>();
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleTouchClick(container);
          handlers.set(container, handler);
          container.addEventListener("click", handler);
        }
      });
    }
    return () => {
      handlers.forEach((handler, container) => container.removeEventListener("click", handler));
    };
  }, []);

  const skillGroups = [
    {
      title: "FRONT-END DEVELOPMENT",
      subtitle: "Building clean and engaging web interfaces",
      description: "Mengembangkan tampilan website yang responsif, nyaman digunakan, dan memperhatikan pengalaman pengguna.",
      skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX Design"],
    },
    {
      title: "BACK-END & DATABASE",
      subtitle: "Creating the logic behind the experience",
      description: "Mempelajari pengembangan sisi server, pengelolaan data, dan integrasi fitur agar website berjalan sesuai kebutuhan.",
      skills: ["PHP", "Database", "JavaScript", "React"],
    },
    {
      title: "AI-ASSISTED DEVELOPMENT",
      subtitle: "Learning faster and building smarter",
      description: "Memanfaatkan AI sebagai alat bantu dalam eksplorasi ide, proses pengembangan, debugging, dan peningkatan kualitas karya.",
      skills: ["AI-assisted development", "Problem Solving", "Continuous Learning"],
    },
  ];

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>I<span className="do-h2"> DO</span></div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          {skillGroups.map((group, index) => (
            <div className="what-content what-noTouch" ref={(el) => setRef(el, index)} key={group.title}>
              <div className="what-border1">
                <svg height="100%">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{group.title}</h3>
                <h4>{group.subtitle}</h4>
                <p>{group.description}</p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  {group.skills.map((skill) => <div className="what-tags" key={skill}>{skill}</div>)}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
