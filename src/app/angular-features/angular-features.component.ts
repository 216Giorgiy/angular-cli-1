import { Component, OnInit } from '@angular/core';
import { AngularFeature } from '../angular-feature';
import { NgfeaturesService } from '../ngfeatures.service';

@Component({
  selector: 'app-angular-features',
  templateUrl: './angular-features.component.html',
  styleUrls: ['./angular-features.component.css']
})
export class AngularFeaturesComponent implements OnInit {
  ngFeatures: AngularFeature[] = [];

  constructor(private ngfeaturesSvc: NgfeaturesService) { }

  ngOnInit() {
    this.ngFeatures = this.ngfeaturesSvc.NgFeatures;
  }
}