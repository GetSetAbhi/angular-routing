import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  name: string;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const userId = params['firstName'] + params['lastName'];
      if (userId) {
        this.name = userId;
        console.log(userId);
      }
    });
  }
}
