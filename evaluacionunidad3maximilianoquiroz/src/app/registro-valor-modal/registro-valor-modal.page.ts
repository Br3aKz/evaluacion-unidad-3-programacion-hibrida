import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro-valor-modal',
  templateUrl: './registro-valor-modal.page.html',
  styleUrls: ['./registro-valor-modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroValorModalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
