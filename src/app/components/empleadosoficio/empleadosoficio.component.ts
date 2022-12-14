import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
<<<<<<< HEAD

  public oficios !: Array<string>;
  @ViewChild("selectoficio") selectOficio!: ElementRef;
  public empleados !: Array<Empleado>

  buscarEmpleados(){
    var oficio = this.selectOficio.nativeElement.value;
    this._service.getEmpleadosOficio(oficio).subscribe(res=>{
      this.empleados = res;
    });
  }

  //Inyectamos los services para cargar los oficios
  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(res=>{
      this.oficios = res;
    });
  }

=======
  public oficios!: Array<string>;
  @ViewChild("selectoficio") selectOficio!: ElementRef;
  public empleados!: Array<Empleado>;

  buscarEmpleados(): void {
    var oficio = this.selectOficio.nativeElement.value;
    this._service.getEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response;
    });
  }

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(response => {
      this.oficios = response;
    });
  }
>>>>>>> c4325c7e2b84f980a525e41a99600b038ee90c1d
}
