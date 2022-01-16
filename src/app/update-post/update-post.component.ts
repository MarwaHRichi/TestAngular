import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  currentPost:any;
 // posts:any = [];
  constructor(private postService:PostService, private activatedRoute:ActivatedRoute, private route:Router) { }
  //updatePostForm:any;
  updatePostForm = new FormGroup ({
    id : new FormControl(""),
    titre : new FormControl(""),
    description : new FormControl(""),
    categorie : new FormControl(""),
    date : new FormControl(""),
  })


  ngOnInit(): void {
  
    this.currentPost = this.postService.updatePost
    (this.activatedRoute.snapshot.params['id']); 
    console.log(this.currentPost);
    }
  
    updatePost(){
      console.log (this.currentPost);
      this.postService.updatePost(this.currentPost);
      alert(" Etes-Vous sur de modifier?")
      this.route.navigate(['listpost']);
    }
}
