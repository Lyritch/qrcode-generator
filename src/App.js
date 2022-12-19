import React, { useState } from "react";
import './App.css';
import QRCode from "qrcode.react";






function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value)
  }

  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('QR')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let lyritch = document.createElement("a");
    lyritch.href = qrCodeURL;
    lyritch.download = `${text}.png`;
    document.body.appendChild(lyritch);
    lyritch.click();
    document.body.removeChild(lyritch);
  }

return (
  <div className="App">
    <div className='header'>
      <h1>QR CODE OLUŞTURURUCU</h1>
    </div>
    <div className="qrcode">
      <QRCode value={text}
        id="QR"
        size={250} />
    </div>
    <div className="form">
      <input type="text" placeholder="Link yazınız" value={text} onChange={(e) => { handleChange(e) }} />

      <input type="button" className="buttonn" value="İndir" onClick={downloadQRCode}></input>
    </div>

  </div>
);
}

export default App;