import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  constructor (private vehicleService: VehicleService, private router: Router)
  {

  }

}
