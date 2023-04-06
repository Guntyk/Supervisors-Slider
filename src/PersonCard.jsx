import { gsap } from "gsap";
import "./PersonCard.css";
import { useEffect } from "react";

export default function PersonCard({ person }) {
  useEffect(() => {
    
  }, []);
  return (
    <div className="person-card">
      <div className="person-info">
        <h2 className="person-name">{person.surname + " " + person.name}</h2>
        <div className="person-subinfo">
          <City />
          <span className="person-town">{person.town}</span>
          <User />
          <span className="person-role">{person.role}</span>
        </div>
        <p className="person-description">{person.description}</p>
      </div>
      <div className="person-photo">
        <div className="person-photo-wrapper">
          <div className="photo-face photo-face--front">
            <img
              src="https://api.lorem.space/image/movie?w=412&h=656"
              alt="1"
              className="photo"
            />
          </div>
          <div className="photo-face photo-face--back"></div>
        </div>
      </div>
    </div>
  );
}

function City() {
  return (
    <svg
      className="icon town-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M104 0C90.7 0 80 10.7 80 24V64H72C32.2 64 0 96.2 0 136V440c0 39.8 32.2 72 72 72H240c-10-13.4-16-30-16-48H72c-13.3 0-24-10.7-24-24V136c0-13.3 10.7-24 24-24h8 48 48 48V64 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H128V24c0-13.3-10.7-24-24-24zM464 160c0 26.5 21.5 48 48 48h64c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H448 320c-8.8 0-16-7.2-16-16V224 64c0-8.8 7.2-16 16-16H448c8.8 0 16 7.2 16 16v96zm48-48V64c0-35.3-28.7-64-64-64H320c-35.3 0-64 28.7-64 64V224 448c0 35.3 28.7 64 64 64H448 576c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H560 512V112zM352 336c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16v32zM368 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368zM352 240c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16v32zM496 416h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H496c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zM480 304c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H496c-8.8 0-16 7.2-16 16v32zM112 320h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zM96 400c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v32zm16-176h32c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16z" />
    </svg>
  );
}

function User() {
  return (
    <svg
      className="icon user-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
    </svg>
  );
}
