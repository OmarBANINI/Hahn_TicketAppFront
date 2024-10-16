import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showNotification(mssg: string, type: string) {
    switch (type) {
      case 'success':
        this.toastr.success(mssg, 'Success');
        break;
      case 'warning':
        this.toastr.warning(mssg, 'Warning');
        break;
      case 'danger':
        this.toastr.error(mssg, 'Error');
        break;
      case 'info':
        this.toastr.info(mssg, 'Info');
        break;
      default:
        this.toastr.info(mssg, 'Info');
    }
  }

  info(mssg: string) {
    this.showNotification(mssg, 'info');
  }

  success(mssg: string) {
    this.showNotification(mssg, 'success');
  }

  warning(mssg: string) {
    this.showNotification(mssg, 'warning');
  }

  danger(mssg: string) {
    this.showNotification(mssg, 'danger');
  }
}
