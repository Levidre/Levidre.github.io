import { Component, OnInit } from '@angular/core';
import { Notices } from 'src/app/model/notices.model';
import { NoticeService } from 'src/app/service/notice.service';

@Component({
  selector: 'app-update-history',
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.scss','../../page.component.scss']
})
export class UpdateHistoryComponent implements OnInit {

  notices! : Notices;
  constructor(private noticeService : NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getAll().subscribe(
      (result:Notices) =>
        {
          this.notices = result;
        }
    );
  }

}
