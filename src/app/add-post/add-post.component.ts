import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
//public posts:any;
  constructor(private postservice:PostService) { }
  addPostForm = new FormGroup ({
    id : new FormControl("",[Validators.required]),
    titre : new FormControl("",[Validators.required]),
    description : new FormControl("",[Validators.required]),
    categorie : new FormControl("",[Validators.required]),
    date : new FormControl("",[Validators.required]),
  })
  ngOnInit(): void {
  }
addPost(){
  this.postservice.ajouterPost(this.addPostForm.value);
  this.addPostForm.reset();
  //localStorage.setItem("posts", JSON.stringify(this.posts));
}
}
