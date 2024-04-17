import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit{
  personForm:FormGroup;
  persons:any[]=[];
  searchName:any
  country=[{"name":"India"},{"name":"USA"},{"name":"Japan"},{"name":"Uk"},{"name":"UAE"}];
  UserImageDisplay:any;
  constructor(
    private fb: FormBuilder,
    public UserService:UserServiceService,
    private router:Router

  ) {}
  profileImage: any;
ngOnInit(): void {
  this.personForm = this.fb.group({
    avtar: ["", Validators.required],
    name: [
      "",
      [Validators.required,Validators.pattern('^[a-zA-Z ]*$')],
    ],
    email: [
      "",
      [Validators.required,Validators.email],
    ],
    dob: ["", Validators.required],
    countryNameSelected: ["", Validators.required],


  });
  this.filteredPersons();
}
  changeImage(event:any)
  {
    
    var reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      this.UserImageDisplay = (<FileReader>event.target).result;
    }
    reader.readAsDataURL(event.target.files[0]);
  this.profileImage =event.target.files[0];
  }
  filteredPersons() {
    this.UserService.getAllUsers().subscribe({
    
      next:(value) =>{
   debugger
        this.persons = Object(value);
        console.log("success");
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
}
