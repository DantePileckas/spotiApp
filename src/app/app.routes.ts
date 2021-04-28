import {Routes} from "@angular/router"
import { ArtistaComponent } from "./components/artista/artista.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";

export const ROUTES:Routes =[
{path:'home', component:HomeComponent},
{path:'artista', component:ArtistaComponent},
{path:'search', component:SearchComponent},
{path:'', pathMatch:'full', redirectTo:'home'},
{path:'**', pathMatch:'full', redirectTo:'home'}
];