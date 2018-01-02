import { Injectable } from '@angular/core';
import { AngularFeature } from './angular-feature';

@Injectable()
export class NgfeaturesService {
  private ngFeatures: AngularFeature[];

  constructor() {
    this.ngFeatures = [
      {
        name: 'Components',
        description: `Components are used to create custom HTML elements. The elements are independent and
         self sufficient pieces of UI that can be reused in any template. Components also help in making the 
         template more readable.`,
        isExpanded: false
      },
      {
        name: 'Directives',
        description: `Directives are used to extend the behavior of the HTML elements. They can be added to 
        a target HTML element to change the behavior of the element based on the business need.`,
        isExpanded: false
      },
      {
        name: 'Pipes',
        description: `Pipes are used to format the data before displaying it on the page. Any data bound on the 
        UI may need some transformation like formatting date, displaying currency symbol or any custom transformation.
         All of these transformations can be done using pipes.`,
        isExpanded: false
      },
      {
        name: 'Services',
        description: `Services are used to handle any non UI logic. They can be injected into any component, directive
         or other services where the piece of logic is required.`,
        isExpanded: false
      }
    ];
  }

  public get NgFeatures() : any {
    return this.ngFeatures;
  }
}
