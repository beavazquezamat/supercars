import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../interfaces/booking';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent{
  bookings: Booking[] =[];
  constructor (private bookingService: BookingService, private authService: AuthService,
    private router: Router){
      this.bookingService.getBookingsByUserId(authService.user!.id).subscribe({
        next: (response)=>{
          this.bookings = response as Booking[]
        },
        error: ()=>{
  
        }
      })
  }
  
}



