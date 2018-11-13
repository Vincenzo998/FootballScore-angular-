import { Component, OnInit } from '@angular/core';
import { HomeRequestService } from 'src/app/services/homeRequest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leagues = [];
  constructor(public homeRequestService: HomeRequestService) { }

  ngOnInit() {

    this.homeRequestService.getLeagues().subscribe((results: any) =>  {
      this.leagues = results.data;
    });

  }

}
