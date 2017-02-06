import {Component, OnInit} from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  // private stop: any = '';
  private user: any = {};

  constructor(private digitransitService: DigitransitService, private router: Router) {
  }

  setPreferences = (formValues: any) => {
    // this.digitransitService.setStop(this.stop);
    localStorage.setItem('user', JSON.stringify(formValues));
    this.router.navigate(['routes']);
    console.log(formValues);
  };

  removePreferences = () => {
    localStorage.removeItem('user');
    this.user.navigate(['routes']);
  }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
}
