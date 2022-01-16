import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  public posts:Post[];
  public post:any = Post;
 // public p:any = Post;
  
  constructor() {
    this.posts = [
      {id:1, titre:"Football", categorie:["Sport"], description:"Coupe d'Afrique", date: new Date("12/01/2022")},
      {id:2, titre:"Voyage", categorie:["Culture"], description:"Sarajevo: Capitale de la Bosnie-Herzégovine", date: new Date("12/01/2022")},
      {id:3, titre:"Tennis", categorie:["Sport"], description:"Open d'Australie", date: new Date("10/01/2022")},
      {id:4, titre:"iPhone", categorie:["Technologies"], description:"iPhone 13Max", date: new Date("12/10/2021")},
      {id:5, titre:"Bitcoin", categorie:["Economie"], description:"Le Bitcoin est une cryptomonnaie autrement appelée monnaie cryptographique.", date: new Date("1/01/2022")},
  
  ]
   }
   listePost():Post[] {
    localStorage.setItem("posts", JSON.stringify(this.posts));
    return this.posts;
    
  }
  ajouterPost( post: Post){
    this.posts.push(post);
    localStorage.setItem("posts", JSON.stringify(this.posts));
    }

    supprimerPost( post: Post){
      this.posts.forEach((cur, index) => {
      if(post.id === cur.id) {
      this.posts.splice(index, 1);
      }
      });
      localStorage.setItem("posts", JSON.stringify(this.posts)); 
      }
      updatePost(id:number):Post{
        this.post = this.posts.find(
          a => a.id == id); 
        return this.post; 
      }
}
