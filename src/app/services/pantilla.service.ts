import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlantillaService {
    constructor(private _http: HttpClient) {}



    getFunciones(): Observable<any>{
      var request = "/api/Plantilla/Funciones";
      var url = environment.urlPlantillas + request;
      return this._http.get(url);
    }

    getPlantillaFunciones(funcion:string): Observable<any>{
      var request = "/api/Plantilla/PlantillaFuncion/" + funcion;
      var url = environment.urlPlantillas + request;
      return this._http.get(url);
    }

    getplantillaSelect(funciones:Array<string>):Observable<any>{

      var data = "";
      for(var funcion of funciones){
        data += "funcion=" + funcion + "&";
      }
      data = data.substring(0, data.length -1);

      var request = "/api/Plantilla/PlantillaFunciones?"+data;
      var url = environment.urlPlantillas + request;
      return this._http.get(url);
    }


}
