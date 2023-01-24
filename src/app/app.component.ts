import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  // Interpolation
  appName = 'This is a One-way data binding example...';

  //Property binding
  clientName: string = 'Joseph';

  //Style binding
  appliedCSSClass = 'green';
  notappliedCSSClass = false;
  myColor = 'red';

  myName = '';

  // Event binding
  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
