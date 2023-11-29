import React, { useRef } from 'react';
import mammoth from 'mammoth';
import html2pdf from 'html2pdf.js';
function WordToPdfConverter() {
  const fileInputRef = useRef(null);
  const handleConvert = async () => {
    try {
      const file = fileInputRef.current.files[0];
      if (!file) {
        alert('Please select a Word document first.');
        return;
      }
      const reader = new FileReader();
      reader.onload = async (event) => {
        const result = event.target.result;
        const { value } = await mammoth.extractRawText({ arrayBuffer: result });
        const html = `<html><head></head><body>${value}</body></html>`;
        html2pdf().from(html).outputPdf((pdf) => {
          const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
          const downloadLink = document.createElement('a');
          const url = URL.createObjectURL(pdfBlob);
          downloadLink.href = url;
          downloadLink.download = 'converted.pdf';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(url);
        });
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error converting Word to PDF:', error);
      alert('Error converting Word to PDF. Please try again.');
    }
  };

  return (
    <div>
      <input type="file" accept=".docx" ref={fileInputRef} />
      <button onClick={handleConvert}>Convert to PDF</button>
    </div>
  );
}

export default WordToPdfConverter;
