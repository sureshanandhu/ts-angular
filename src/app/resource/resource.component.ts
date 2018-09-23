import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../core/services/resource.service';
import { Resource } from 'src/app/core/models/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  resources: Resource[];

  constructor(
    private resouceService: ResourceService) { }

  ngOnInit() {
    this.resouceService.getResourceList().subscribe(resource => {
      debugger;
      this.resources = resource.data;
      console.log(this.resources);
    });
  }

}
