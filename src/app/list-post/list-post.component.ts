import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  public posts:any;
  constructor(private postservice:PostService) {
   
   }

  ngOnInit(): void {
    this.posts = this.postservice.listePost()
  }

  supprimerPost(id:Post)
    {
    this.postservice.supprimerPost(id);
    }
   
}
