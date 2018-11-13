import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HomeRequestService {

    id: number;
    constructor(private http: HttpClient) {}

    getLeagues() {
        return this.http.get('https://sportickr.com/api/v1.0/leagues?api-key=cd9366bb0b41bb40ee56ac89244b89e8');
    }

    getTeam(id) {
        return this.http.get('https://sportickr.com/api/v1.0/teams/' + id + '?api-key=cd9366bb0b41bb40ee56ac89244b89e8');
    }

    getTeamPlayer(id) {
        return this.http.get('https://sportickr.com/api/v1.0/player/' + id + '?api-key=cd9366bb0b41bb40ee56ac89244b89e8');
    }

}

