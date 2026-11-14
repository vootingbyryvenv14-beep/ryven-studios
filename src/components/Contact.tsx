import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's Connect</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Contact</h4>
            <p>
              <a href="mailto:ryvenakmal105@gmail.com" data-cursor="disable">
                ryvenakmal105@gmail.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/6288212115693" target="_blank" rel="noreferrer" data-cursor="disable">
                WhatsApp — 0882 1211 5693
              </a>
            </p>
            <p>Pacitan, Indonesia</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/vootingbyryvenv14-beep" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              GitHub <MdArrowOutward />
            </a>
            <a href="https://www.instagram.com/rvn_nzzz/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>RYVEN STUDIOS</span>
            </h2>
            <p style={{ maxWidth: "300px", opacity: 0.7 }}>
              “Tidak harus langsung hebat. Mulailah, konsistenlah, dan jadikan
              setiap proses sebagai bagian dari perjalanan.”
            </p>
            <h5>
              <MdCopyright /> 2026 RYVEN STUDIOS
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
