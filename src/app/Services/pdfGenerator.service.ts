import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  generatePDF(elementId: string): void {
    const element = document.getElementById(elementId);

    if (element) {
      // Extract specific elements (e.g., .cart-item) from the cart content
      const itemElements = Array.from(element.querySelectorAll('.cart-item'));

      if (itemElements.length === 0) {
        console.error('No items found to include in the PDF.');
        return;
      }

      const printWindow = window.open('', '', 'width=1000,height=1000');
      printWindow?.document.open();

      printWindow?.document.write(`
        <html>
          <head>
            <title>Products</title>
            </head>
          <body>
      `);

      itemElements.forEach((itemElement) => {
        const h4Element = itemElement.querySelector('h4');
        const spanElements = Array.from(itemElement.querySelectorAll('span'));

        printWindow?.document.write(` <div class='row-container' style="display: flex; border-bottom: 1px solid black; font-size: 14px; margin-bottom: 10px;"`);
        if (h4Element) {
          printWindow?.document.write(h4Element.outerHTML);
        }
        spanElements.forEach((spanElement, index) => {
          // Determine whether to add "Price" or "Quantity" based on the index
          const labelText = index % 2 === 0 ? 'Price' : 'Quantity';
          printWindow?.document.write(`<span style="margin-left:10px">${labelText}: ${spanElement.innerHTML}</span>`);
        });

        printWindow?.document.write(` </div>`);


      });

      // Close the HTML document
      printWindow?.document.write(`
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
