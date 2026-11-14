import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbBrandWhatsapp } from "react-icons/tb";
import { useEffect } from "react";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;
    const cleanups: (() => void)[] = [];
    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement | null;
      if (!link) return;
      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let frame = 0;
      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        frame = requestAnimationFrame(updatePosition);
      };
      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };
      document.addEventListener("mousemove", onMouseMove);
      updatePosition();
      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(frame);
      });
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span><a href="https://github.com/vootingbyryvenv14-beep" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a></span>
        <span><a href="https://www.instagram.com/rvn_nzzz/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a></span>
        <span><a href="mailto:ryvenakmal105@gmail.com" aria-label="Email"><FaEnvelope /></a></span>
      </div>
      <a className="resume-button" href="https://wa.me/6288212115693" target="_blank" rel="noreferrer">
        <span>CONTACT</span>
        <span><TbBrandWhatsapp /></span>
      </a>
    </div>
  );
};

export default SocialIcons;
