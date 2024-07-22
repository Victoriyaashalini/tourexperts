import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DestinationComponent } from './components/destination/destination.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AsiaComponent } from './secondorycomponent/asia/asia.component';
import { IndiaComponent } from './secondorycomponent/india/india.component';
import { InternationalComponent } from './secondorycomponent/international/international.component';
import { HoneymoonComponent } from './secondorycomponent/honeymoon/honeymoon.component';
import { IslandComponent } from './secondorycomponent/island/island.component';
import { WeddingComponent } from './secondorycomponent/wedding/wedding.component';
import { FamilytourComponent } from './secondorycomponent/familytour/familytour.component';
import { GrouptourComponent } from './secondorycomponent/grouptour/grouptour.component';
import { PopulartoursComponent } from './components/populartours/populartours.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
	{path:'',title:'home',component:HomeComponent},
	{path:'about',title:'about',component:AboutComponent},
	{path:'destination',title:'destinationSearch',component:DestinationComponent},
	{path:'package',title:'package',component:PackagesComponent},
	
			{path:'asia',title:'package|asia',component:AsiaComponent},
			{path:'indiapackage',component:IndiaComponent},
			{path:'internationalpakage',component:InternationalComponent},
			{path:'honeymoonPackage',component:HoneymoonComponent},
			{path:'islandPackage',component:IslandComponent},
			{path:'weddingPackage',component:WeddingComponent},
			{path:'familytourPackage',component:FamilytourComponent},
			{path:'grouptour',component:GrouptourComponent},
	
	{ path: 'populartour', component: PopulartoursComponent },
	{ path: 'contact', component:ContactComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }