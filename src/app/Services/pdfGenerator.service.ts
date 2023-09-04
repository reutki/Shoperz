import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  generatePDF(
    elementId: string,
    data: any[],
    columns=Object.keys(data[0]),
  ): void {
    const element = document.getElementById(elementId);

    if (element) {

      if (data.length === 0) {
        console.error('No items found to include in the PDF.');
        return;
      }

      const printWindow = window.open('', '', 'width=1000,height=1000');
      printWindow?.document.open();

      printWindow?.document.write(`
        <html style='width:100%'>
          <head>
            <title>${element.getAttribute('title')}</title>
          </head>
          <body>
          <table style='margin-top: 20px; border-collapse: collapse;border: 1px solid black;'>
            <thead>
              <tr>
                ${columns.map((item) => `<th style='border: 1px solid black;padding: 5px; '>${item}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
            ${data.map((item) => {
              console.log(data);
              console.log(item);


             return `<tr  >
             ${Object.values(item).map(value=>`<td style='border: 1px solid black;padding: 5px;   '>${value}</td>`)}

             </tr>`
            }
            ).join('')}
          `);


          printWindow?.document.write(`
            </tbody>
          </table>
          </body>
        </html>
      `);

      printWindow?.document.close();
      printWindow?.print();
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  }
}
