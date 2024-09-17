import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { CalculadoraService } from './calculadora.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private calculatorService:CalculadoraService){
  }

  ngOnInit(): void {  
  }

  title = 'Calculadora';
  value:string = '';
  ban:boolean=true;
  result:number=0.0;
  


  introValue(val: string) {
    this.value += val;
  }

  clearDisplay() {
    this.value = '';
  }

  deleteValue(){
    this.value = this.value.slice(0,-1);
  }
  
  handleKeyPress(event: KeyboardEvent) {
    const allowedKeys = '0123456789+-*/().'; // Teclas permitidas
    const key = event.key;

    if (allowedKeys.includes(key)) {
      this.value += key; // Agregar la tecla al display si es válida
    } //else if(key === 'Enter'){
      //this.result = this.numero;
      //this.numero = this.calculatorService.getResult();
    //}
    
    //else if (key === 'Enter') {
    //   this.calculateResult(); // Calcular el resultado cuando se presiona Enter
    // } else if (key === 'Backspace') {
    //   this.displayValue = this.displayValue.slice(0, -1); // Eliminar el último carácter al presionar Backspace
    // }

    event.preventDefault(); // Prevenir comportamiento por defecto del input (por ejemplo, recargar la página)
  }


  // sumar():void{
  //   this.resultado = this.numero1 + this.numero2;
  // }

  // restar():void{
  //   this.resultado = this.numero1 - this.numero2;
  // }

  // multiplicar():void{
  //   this.resultado = this.numero1 * this.numero2;
  // }

  // dividir():void{
  //   this.resultado = this.numero1 / this.numero2;
  // }
}
