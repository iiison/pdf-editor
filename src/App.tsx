import React, { useState } from 'react';
import Welcome from './components/Welcome/Welcome'
import PdfResume from './components/PdfResume/PdfResume'

function App() {
  const [showPdf, setPdfVisibility] = useState(false)

  return (
    <div className="w-full h-full flex">
      {showPdf ? <PdfResume /> : <Welcome onClick={setPdfVisibility} />}
    </div>
  );
}

export default App;
