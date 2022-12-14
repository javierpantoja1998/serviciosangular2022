import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { PadrecomicsComponent } from "./components/padrecomics/padrecomics.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";
<<<<<<< HEAD
import { PlantillaempleadosComponent } from "./components/plantillaempleados/plantillaempleados.component";
=======
import { PlantillafuncionesComponent } from "./components/plantillafunciones/plantillafunciones.component";
>>>>>>> c4325c7e2b84f980a525e41a99600b038ee90c1d
const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "padrecomics", component:PadrecomicsComponent},
    {path: "comicsinyeccion", component: ComicsinyeccionComponent},
    {path: "personasapi", component: PersonasapiComponent},
    {path: "empleadossalario", component: EmpleadossalarioComponent},
    {path: "empleadosoficio", component: EmpleadosoficioComponent},
<<<<<<< HEAD
    {path: "plantillafuncion", component: PlantillaempleadosComponent}
=======
    {path: "plantillafunciones", component: PlantillafuncionesComponent}
>>>>>>> c4325c7e2b84f980a525e41a99600b038ee90c1d
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);
