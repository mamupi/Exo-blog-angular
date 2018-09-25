import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Cuisine espagnole...si!!!',
      content: 'On adore tous la cuisine espagnole: paëlla, tortilla de patatas, cocido, tapas, pintxos,...',
      loveIts: 3,
      created_at: '09/09/2018'
    },
    {
      title: 'Crêpe party...everyday!',
      content: 'Il ne faut surtout pas attendre mardi gras pour manger des crêpes',
      loveIts: 0,
      created_at: '10/09/2018'
    },
    {
      title: 'Raclette...pas que en hiver',
      content: 'Même en été une raclette fait du bien!',
      loveIts: -1,
      created_at: '11/09/2018'
    }
  ];

}
