import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { WebringBoxComponent } from '../webring-box/webring-box.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
            //var shadow = document.getElementById("ring");
            //console.log(shadow.childNodes);
            //var childNodes = shadow.childNodes;
            
            
      var request = new XMLHttpRequest();

      function reqListener (this: any) {
        //console.log(this.responseText);
                      
          var decoded = JSON.parse(atob(this.response['content']))
          var elem = document.getElementById("members");
          if (elem != null)
          {
            elem.textContent=decoded.length;
          }
          console.log(decoded);
      }

      var oReq = new XMLHttpRequest();
      oReq.responseType = 'json';
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "https://api.github.com/repos/coulditbebort/webring/contents/src/data/members.json");
      oReq.send();
      }

}
