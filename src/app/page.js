
import QRCode from "react-qr-code";

export default function Home() {
  const chooseLinkPageUrl = 'http://localhost:3000//chooseLink';  // Replace with your production URL

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' ,marginLeft:"100px" }}>
      <h1>Scan to Choose a Link</h1>
      <QRCode value={chooseLinkPageUrl} size={256} />
    </div>
  );
}
