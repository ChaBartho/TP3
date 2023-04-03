import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute, private _router : Router){}

  token!: any;

  ngOnInit(): void {
    this._activatedRoute.fragment.subscribe(fragment => {
      if(fragment != null){
        const params = new URLSearchParams(fragment);
        this.token = params.get('access_token');
        localStorage.setItem("test", this.token);
        this._router.navigate([''], { relativeTo: this._activatedRoute });
        console.log(localStorage.getItem("test"))
      }
    })
  }


}
