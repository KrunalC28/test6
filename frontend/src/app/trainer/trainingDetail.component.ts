import { Component, OnInit, Input } from '@angular/core';
import { TrainerService } from './trainer.service';
import { Training } from '../shared/training';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'training-detail',
    templateUrl: './trainingDetail.component.html',
    styleUrls:['./trainingDetail.component.css']
})

export class TrainingDetailComponent implements OnInit {
    training: Training = { id: 0, title: '', department: '', taudience: '', trainer: '', date: '', starttime: '', endtime: '', location: '', isStart: '', isComplete: '' };
    scenario: string = ''

    constructor(private trainerService: TrainerService,
        private route: ActivatedRoute,
        private location: Location) { }

    add() {
        console.log(this.scenario);
        let sc = {
            desc: this.scenario,
            trid: this.training.id
        };
        this.trainerService.addScenario(sc).subscribe(
            (data) => {
                console.log(data);
                if (data != null) {
                }
                else {
                    console.log('Error ');
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    back(){
        this.location.back();
    }
    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.trainerService.getTraining(+params['id']))
            .subscribe(
            (data) => {
                //console.log(data[0]); 
                this.training = data[0];
                console.log(this.training);
            },
            (err) => console.log(err));
    }
}