
import QRCode from "react-qr-code";
import Footer from "./footer";

export default function Home() {
  const chooseLinkPageUrl = 'https://halftime-xfpm.onrender.com//chooseLink';  // Replace with your production URL

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' ,marginLeft:"100px",position:"relative" }}>
      <h1>Scan to Choose a Link</h1>
      <QRCode value={chooseLinkPageUrl} size={256} />
     
    </div>
  );
}
