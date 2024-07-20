import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  url : string = "http://localhost:3000/api/vehicles"
  constructor(private http: HttpClient, private authService: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const user = this.authService.getUser();
    const token = user ? user.token : null;
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  } 
  
  getAll(){
    return this.http.get(this.url)
  }

  getById(id: string){
    return this.http.get(`${this.url}/${id}`)
  }

  updateVehicle(id: string, vehicle: Vehicle): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, vehicle, { headers: this.getAuthHeaders() });
  }

  deleteVehicle(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { headers: this.getAuthHeaders() });
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.url, vehicle, { headers: this.getAuthHeaders() });
  }
}
