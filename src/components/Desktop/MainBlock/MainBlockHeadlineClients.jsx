import ForbesLogo from "assets/logo-clients-forbes.svg";
import AirbusLogo from "assets/logo-clients-airbus.svg";
import NascarLogo from "assets/logo-clients-nascar.svg";
import UscLogo from "assets/logo-clients-usc.svg";

export default function Clients () {
  return (
    <div className="clients">
      <h6>Used by</h6>
      <div className="clients-logos">
        <div className="client-logo">
          <img src={ForbesLogo} alt="Forbes Logo" />
        </div>
        <div className="client-logo">
        <img src={AirbusLogo} alt="Airbus Logo" />
        </div>
        <div className="client-logo">
        <img src={NascarLogo} alt="Nascar Logo" />
        </div>
        <div className="client-logo">
        <img src={UscLogo} alt="Usc Logo" />
        </div>
      </div>
    </div>
  );
}