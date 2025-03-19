import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import cvPDF from "../../public/cv.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

function CV() {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="cv-container">
      <h1>Mon CV</h1>
      <Document
        file={cvPDF}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}
      </Document>
      <a href={cvPDF} download className="cv-download">
        Télécharger le CV
      </a>
    </div>
  );
}

export default CV;
