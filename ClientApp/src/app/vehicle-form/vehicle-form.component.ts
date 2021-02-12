import { VehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any;
  features: any;
  vehicle: any = {};
  models: any;

  constructor(
    private vehicleService : VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes => this.makes = makes);

    this.vehicleService.getFeatures().subscribe(features => this.features = features);
  }
  
  onMakeChange(){
    //this.modelService.getModels().subscribe(m => m.MakeId = this.vehicle.make);
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }

}
