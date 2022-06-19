import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import { SharedService } from './shared/shared.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mini_project-4';
  displayedColumns: string[] = ['First Name', 'Last Name', 'Status', 'Gender','Date of Birth','action'];
  dataSource !: MatTableDataSource<any>;
  data:any =[]
  recieaveData: any=[]
  row:any =false

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
 
  constructor(private dialog: MatDialog, private service: SharedService) { }

  ngOnInit() {
    this.getallUsers()

    console.log(this.service.recFormData())

  }
  
  

  openDialog() {
    this.dialog.open(AddUserComponent, { width: "50%" }).afterClosed().subscribe({next:(val)=>{
      if(val === "save"){
        this.getallUsers();
      }
    }})
  }

  editUser(row:any){
    this.dialog.open(AddUserComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe({next:(val)=>{
      this.getallUsers();
    }})
  }
  // getallUsers() {
  //   this.serviece.getUser()
  //     .subscribe({
  //       next: (res) => {
  //         this.dataSource = new MatTableDataSource();
  //         this.dataSource.paginator = this.paginator;
  //         this.dataSource.sort = this.sort;
  //         console.log(res.records)
  //       },
  //       error:()=>{
  //         window.alert("error while fetching data ")
  //       }

  //     });
  // }

  getallUsers(){
   
    this.service.getUser().subscribe((responce)=>{
      for (let i = 0; i < responce.records.length; i++) {
       this.data.push(responce.records[i]) ;
       if(this.row == true){
        responce.records[i].splice();
       }
       
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deletafunc(){
    this.row =true
    console.log(this.row)
  }
 

 
  



}


