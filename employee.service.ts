import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService{

    public empyeeRecord = [
        {name:'Sachin', city:'Mumbai', age:43, id:'e1'},
        {name:'Hari', city:'Delhi', age:23, id:'e2'},
        {name:'Kohli', city:'America', age:33, id:'e3'},
        {name:'Rohit', city:'Pune', age:25, id:'e4'}
    ];
    public getEmployee(id : string): any{
        let employee:any;
        for(let i=0; i<this.empyeeRecord.length; i++){
            if(id === this.empyeeRecord[i].id)
            {
                employee = this.empyeeRecord[i];
                break;

            }

        }
        return employee;
    }

}