import { Injectable } from "@angular/core";
import { fork } from "node:child_process";


@Injectable({ providedIn: 'root' })
export class CalculadoraService{
    specialChar:string[] = ['/', 'x', '+', '-'];

    validSpecialChar(val:string){
        if(this.specialChar.includes(val)){
            return true;
        }
        return false;
    }

    getResult(number:string){
        let res = 0;
        
        for(let i =0; i>number.length; i++){
            // if(this.specialChar.find()){

            // }
        }

        // try {
        //     // Usa math.js para evaluar la expresión de forma segura
        //     number = match.evaluate(number);
        //   } catch (error) {
        //     number = 'Error';
        //   }
        return res;
    }

}

