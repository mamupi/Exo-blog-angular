import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postDate: Date;
  @Input() postContent: string;
  @Input() postLoveIts: number;

  constructor() { }

  onLiker() {
    this.postLoveIts ++;
    console.log(this.postLoveIts);
  }

  onDontLiker() {
    this.postLoveIts --;
  }

  ngOnInit() {
  }

}
