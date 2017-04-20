import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector:'test',
  template: `<div class="container">
               <div class="content">
                  <span> Welcome Trainee </span>
                  <br>
                  <a (click) = "logout()" href="">Logout</a>
              </div>
            </div> 
  `
})

export class TraineeComponent{

  constructor(){}

  logout(){
  }
}