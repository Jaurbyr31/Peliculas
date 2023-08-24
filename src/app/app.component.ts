import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username: string = '';
  password: string = '';
  backdropTapListener: any;
  alertOverlay: HTMLIonAlertElement | undefined;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private menuCtrl: MenuController) {
    this.alertOverlay = undefined;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciales incorrectas',
      message: 'Por favor, intenta nuevamente.',
      buttons: ['OK']
    });

    await alert.present();


    this.alertOverlay = await this.alertController.getTop();
    if (this.alertOverlay) {
      this.backdropTapListener = this.backdropTapHandler.bind(this);
      this.alertOverlay.addEventListener('ionBackdropTap', this.backdropTapListener);
    }
  }

  backdropTapHandler(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  login() {
    if (this.username === 'jaurbyr' && this.password === '1234') {
      this.menuCtrl.close();
      this.router.navigate(['/home']);
    } else {
      this.presentAlert();
    }
  }

  ngOnDestroy() {
    // Remover el listener cuando el componente se destruye
    if (this.alertOverlay) {
      this.alertOverlay.removeEventListener('ionBackdropTap', this.backdropTapListener);
    }
  }

  Navigate(url: any) {
    this.menuCtrl.close()
    this.router.navigate([url]);
  }
}
