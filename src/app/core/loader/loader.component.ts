import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(
    private loader: CoreService
  ) { }

  loaderDisplay = this.loader.loaderDisplay;

  ngOnInit(): void {
  }
}
