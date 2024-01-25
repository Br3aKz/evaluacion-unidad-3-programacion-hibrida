import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-eliminacion-modal',
  templateUrl: './confirmar-eliminacion-modal.page.html',
  styleUrls: ['./confirmar-eliminacion-modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfirmarEliminacionModalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
