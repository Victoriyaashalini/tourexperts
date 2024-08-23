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
import { PackagedetailsComponent } from './components/packagedetails/packagedetails.component';
import { CountryPackagesComponent } from './country-packages/country-packages.component';

export const routes: Routes = [
	{path:'',title:'home',component:HomeComponent, data: { breadcrumb: 'Home' }},
	{path:'about',title:'about',component:AboutComponent,data: { breadcrumb: 'About' }},
	{path:'destination',title:'destinationSearch',component:DestinationComponent,data: { breadcrumb: 'Destination' } },
	{ path: 'package/:id', component:PackagedetailsComponent,data: { breadcrumb: 'Destination Search' } },
	{ path: '', redirectTo: '/destination', pathMatch: 'full' },
	{ path: 'country/:country', component: CountryPackagesComponent,data: { breadcrumb: 'Country Packages' } }, // New route for country packages
  { path: 'package/:id', component: PackagedetailsComponent, data: { breadcrumb: 'Package Details' } }, 
	{path:'package',title:'package',component:PackagesComponent,data: { breadcrumb: 'Packages' } },
	
			{path:'asia',title:'package|asia',component:AsiaComponent,data: { breadcrumb: 'Asia Packages' } },
			{path:'indiapackage',component:IndiaComponent,data: { breadcrumb: 'India Packages' } },
			{path:'internationalpakage',component:InternationalComponent,data: { breadcrumb: 'International Packages' } },
			{path:'honeymoonPackage',component:HoneymoonComponent,data: { breadcrumb: 'Honeymoon packages' } },
			{path:'islandPackage',component:IslandComponent,data: { breadcrumb: 'Island Packages' } },
			{path:'weddingPackage',component:WeddingComponent,data: { breadcrumb: 'Wedding packages' } },
			{path:'familytourPackage',component:FamilytourComponent,data: { breadcrumb: 'familytour Packages' } },
			{path:'grouptour',component:GrouptourComponent,data: { breadcrumb: 'Group tour Packages' } },
	
	{ path: 'populartour', component: PopulartoursComponent,data: { breadcrumb: 'Popular tours' }  },
	{ path: 'contact', component:ContactComponent,data: { breadcrumb: 'Contact' }  },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }