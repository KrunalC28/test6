import { Component, OnInit } from '@angular/core';
import { DataService }  from '../shared/data.service';
import { User }         from '../shared/user';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    users: User[] = [];

    constructor( private dataService : DataService) { }

    ngOnInit() { 
        this.dataService.getAllusers().subscribe(
            (data : User[]) => {
                this.users = data;
            } 
        );
    }
}