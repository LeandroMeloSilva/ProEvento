import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public eventos: any=[];
  widthImg: number = 100;
  marginImg: number = 2;
  mostrarImagem: boolean = true;
  private _filtroLista: string = '';
  public eventosFiltrados: any=[];


public get filtroLista(): string{
  return this._filtroLista;
}

public set filtroLista(value: string){
  this._filtroLista = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista): this.eventos;
}

  //importar o HttpClient
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem(){
    this.mostrarImagem=!this.mostrarImagem;
  }

  public getEventos():void{
     this.http.get('http://localhost:5000/api/Eventos').subscribe
    (
      response => {
        this.eventos = response,
        this.eventosFiltrados = this.eventos;
      },
        error => console.log(error)
    )
  }

  filtrarEventos(filtrarPor: string): any{
    filtrarPor= filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: {tema: string; local: string; lote:string}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.lote.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }
}
