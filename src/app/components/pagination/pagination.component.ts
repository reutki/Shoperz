import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  length: number = 180;
  itemsPerPage: number = 10;
  hideItemsPerPage: boolean = true;
  activePage: number = 0;

  get pages(): number[] {
    return Array.from(
      { length: Math.ceil(this.length / this.itemsPerPage) },
      (_, i) => i
    );
  }

  goToPage(pageIndex: number): void {
    this.activePage = pageIndex;
  }

  handlePageChange(event: number) {
    this.activePage = event;
  }
}
