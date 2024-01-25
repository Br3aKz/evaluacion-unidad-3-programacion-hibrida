import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, NavController } from '@ionic/angular/standalone';
import { MessageComponent } from '../message/message.component';
import { ApiService } from '../services/api.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { RegistroValorModalPage } from '../registro-valor-modal/registro-valor-modal.page';
import { ConfirmarEliminacionModalPage } from '../confirmar-eliminacion-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  destinos: any[] = [
    { nombre: 'Valparaíso', pais: 'Chile', foto: 'assets/images/foto_valparaiso.jpg' },
    { nombre: 'Osaka', pais: 'Japón', foto: 'assets/images/foto_osaka.jpg' },
  ];
  modalCtrl: any;

  constructor(private navCtrl: NavController, private apiService: ApiService) {

  }
  obtenerDestinos() {
    this.apiService.obtenerDestinos().subscribe((data: any[]) => {
      this.destinos = data;
    });
  }

  verDetalles(destino: any) {

  }


  buscarDestinos(event: any) {
    const textoBusqueda = event.target.value.toLowerCase();

    if (textoBusqueda.trim() !== '') {
      this.destinos = this.destinos.filter(destino =>
        destino.nombre.toLowerCase().includes(textoBusqueda) ||
        destino.pais.toLowerCase().includes(textoBusqueda)
      );
    } else {

    }
  }

  async tomarFoto() {
    const foto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });
}
async abrirModal() {
  const modal = await this.modalCtrl.create({
    component: RegistroValorModalPage,
  });

  await modal.present();

  const { data } = await modal.onWillDismiss();

  if (data && data.montoViaje) {
    console.log('Monto del viaje registrado:', data.montoViaje);
  }
  
async confirmarEliminar(destino: any) {
    const modal = await this.modalCtrl.create({
      component: ConfirmarEliminacionModalPage,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data && data.confirmado) {
      this.eliminarDestino(destino);
    }
  }

  eliminarDestino(destino: any) {
    console.log('Destino eliminado:', destino);
  }
  }
}
