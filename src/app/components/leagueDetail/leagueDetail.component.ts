import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeRequestService } from 'src/app/services/homeRequest.service';

@Component({
  selector: 'app-leaguedetail',
  templateUrl: './leagueDetail.component.html',
  styleUrls: ['./leagueDetail.component.css']
})
export class LeagueDetailComponent implements OnInit {

  id: number;
  teams: any;
  players: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private homeRequestService: HomeRequestService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.homeRequestService.getTeam(this.id).subscribe((results: any) => {
      this.teams = results.data;
    });

    this.homeRequestService.getTeamPlayer(this.id).subscribe((results: any) => {
      this.players = results.data;
      console.log(results.data);
    });

  }

}
