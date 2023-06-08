import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent {
  myFavoriteMovies = [ 'Encanto', 
  'Spider-Man: No Way Home', 
  "Harry Potter and the Sorcerer's Stone" ];
  constructor(){}

  ngOnInit(): void {

   

  }

  selectedMovieToWatch(data: string) { data = "Spider-Man: No Way Home"
  
    debugger;
    alert(data);
  }


}
