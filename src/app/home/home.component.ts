import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcomeMessage:string="Welcome to Angular!";
  homeimage:string="https://cdn.pixabay.com/photo/2022/12/08/17/58/sign-7643825_1280.png"
}
