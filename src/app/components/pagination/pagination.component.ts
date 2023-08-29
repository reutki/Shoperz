import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() array: any[] = [];
  @Input() itemsPerPage: number = 0;

  length: number = 0;
  hideItemsPerPage: boolean = true;
  activePage: number = 0;
  @Output() pageChange = new EventEmitter<any[]>();

  ngOnChanges(changes: SimpleChanges) {
    if ('array' in changes) {
      this.length = this.array.length;
    }
  }

  get pages(): number[] {
    return Array.from(
      { length: Math.floor(this.length / this.itemsPerPage) },
      (_, i) => i
    );
  }

  goToPage(pageIndex: number): void {
    this.activePage = pageIndex;
  }
  handlePageChange(event: number) {
    const startIndex = event * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage - 1;
    const paginatedArray = this.array.slice(startIndex, endIndex + 1);
    this.activePage = event;
    this.pageChange.emit(paginatedArray);
  }

}
