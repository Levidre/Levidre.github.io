import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';
import { MatTabChangeEvent } from '@angular/material/tabs/tab-group';
import { NoticesPage } from 'src/app/model/notices-page.model';
import { NoticeService } from 'src/app/service/notice.service';

@Component({
  selector: 'app-update-history',
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.scss','../../page.component.scss']
})
export class UpdateHistoryComponent implements OnInit {

  azuraNotices! : NoticesPage;
  zimNotices! : NoticesPage;

  currentNotices = this.azuraNotices;
  pageSizeOptions = [5, 10, 25, 50];
  showFirstLastButtons = true;

  constructor(private noticeService : NoticeService) { }

  handleTabChange(event : MatTabChangeEvent) {
    switch (event.index) {
      case 1: {
        this.currentNotices = this.azuraNotices;
        break;
      }
      case 2: {
        this.currentNotices = this.zimNotices;
        break;
      }
      default: {}
    }
  }

  handlePageChange(event: PageEvent) {
    this.currentNotices.size = event.pageSize;
    this.currentNotices.page = event.pageIndex;
    this.currentNotices.currentPage = this.currentNotices.notices.slice(event.pageSize*event.pageIndex,event.pageSize*(event.pageIndex+1));
  }

  ngOnInit(): void {
    this.noticeService.getAzuraNotices().subscribe(
      (result:NoticesPage) =>
        {
          this.azuraNotices = result;
          this.currentNotices = this.azuraNotices;
          this.currentNotices.currentPage = this.currentNotices.notices.slice(0,5);
        }
    );
    this.noticeService.getZimNotices().subscribe(
      (result:NoticesPage) =>
        {
          this.zimNotices = result;
          this.zimNotices.currentPage = this.zimNotices.notices.slice(0,5)
        }
    );
  }

}
