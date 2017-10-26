import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Routes, Router } from '@angular/router'; 
import { EmployeeService } from './Services/employee.service';
import { CountriesService } from './Services/countries.http.service';
import { ProfileService } from './Services/profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
  providers:[EmployeeService,CountriesService,ProfileService]
  
})


export class AppComponent implements OnInit{
  public employeeObj:any;
  public empId:string;
  public countryName:string;
  public countryList:string;
  public profileObj: any = {name: '', job: '', city: '', id: ''};


  constructor(private employeeService:EmployeeService, private countriesservice:CountriesService,
  private profileService:ProfileService){


  }
  

  public getEmployeeDetail():void{

    this.employeeObj = this.employeeService.getEmployee(this.empId);
  }

  public countryObj:any;
  public getCountryInfo(){
    this.countriesservice.getCountryDetail(this.countryName).subscribe(res => this.countryObj=res.json()[0])

  }
  ngOnInit(){
    this.countriesservice.getCountryList().subscribe(res => this.countryList=res.json())
  }
  title = 'Srihari Angular Project';
  public firstName:string = "Mekala";
  public  lastName = "Srihari";
  public pipe = "pipes demo";
  public myStyle = {
  'color':'blue',
  'background-color':'yellow'
  };
  public showText = false;
  public toggle(){
    this.showText=!this.showText;
  }
  public textColor='BLUE';

  public players =[
    {name:'Srihari',city:'Palamaer'},
    {name:'Kartheek',city:'Chittoor'},
    {name:'Mahesh',city:'Madanapalli'}
  ]
  public score=10;
  public scores=.1;
  public today = new Date();
  public isHidden =false;


  public saveUserProfile():void{
    this.profileService.saveProfile().subscribe(res => this.profileObj = res);
  }
  
  
}
