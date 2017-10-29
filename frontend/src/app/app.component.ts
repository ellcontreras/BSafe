import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { botService } from './services/botService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [botService]
})
export class AppComponent implements OnInit {
  public pregunta: String;
  public messageError;
  public succesMessage;

  constructor(private botService: botService){
  }

  ngOnInit(){
    console.log("Inicia de forma correcta");
  }

  onSubmit(){
    var caja = document.getElementById('caja');
    var p = document.createElement("p");
    var salto = document.createElement("br");
    var el = document.createTextNode(this.pregunta.toString());

    p.appendChild(el);
    p.className += "alert alert-info";
    p.style.cssFloat = "right";
    p.appendChild(salto);
    p.appendChild(salto);
    p.appendChild(salto);
    caja.appendChild(p);

    this.botService.preguntar(this.pregunta).subscribe(
      response => {
        this.succesMessage = response.message;

        var caja = document.getElementById('caja');
        var salto = document.createElement("br");
        var p = document.createElement("p");
        var el = document.createTextNode(this.succesMessage);
    
        p.appendChild(el);
        p.className += "alert alert-success";
        p.style.cssFloat = "left";
        p.appendChild(salto);
        p.appendChild(salto);
        p.appendChild(salto);
        caja.appendChild(p);

        this.pregunta = " ";
      }, error => {
        let messageError = <any>Error;

        if(messageError){
          this.messageError = messageError.error;
        }
      }
    );
  }
}
