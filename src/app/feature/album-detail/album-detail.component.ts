import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Artist } from 'src/app/shared/model/spotify';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent{


@Input() albums! : Album[]


}
