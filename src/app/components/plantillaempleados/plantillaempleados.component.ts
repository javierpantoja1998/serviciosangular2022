import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillaService } from 'src/app/services/pantilla.service';

@Component({
  selector: 'app-plantillaempleados',
  templateUrl: './plantillaempleados.component.html',
  styleUrls: ['./plantillaempleados.component.css'],
})
export class PlantillaempleadosComponent implements OnInit {
  public funciones !: Array<string>
  public plantillas !: Array<Plantilla>;
  @ViewChild("selectfunciones") selectfunciones !: ElementRef;


  buscarEmpleados(){
    var seleccionados = new Array<string>;

    var valorOpcion = this.selectfunciones.nativeElement.options;

    for(var option of valorOpcion){
      if(option.selected == true){
        seleccionados.push(option.value);
      }
    }

    this._service.getplantillaSelect(seleccionados).subscribe(res=>{
      this.plantillas = res;
    });
  }
  constructor(private _service: PlantillaService) {}

  ngOnInit(): void {
    this._service.getFunciones().subscribe((res) => {
      this.funciones = res;
    });

  }
}
