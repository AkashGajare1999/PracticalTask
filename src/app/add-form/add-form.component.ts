import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
  country=[{"name":"India"},{"name":"USA"},{"name":"Japan"},{"name":"Uk"},{"name":"UAE"}];
  personForm:FormGroup;
UserImageDisplay: any;
  profileImage: any;
  constructor(
    private fb: FormBuilder,
    public UserService:UserServiceService,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.personForm = this.fb.group({
      avtar: [""],
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
  }
changeImage(event:any)
{
  debugger
  var reader = new FileReader();
  reader.onload = (event: ProgressEvent) => {
    this.UserImageDisplay = (<FileReader>event.target).result;
  }
  reader.readAsDataURL(event.target.files[0]);
this.profileImage =event.target.files[0];
this.personForm.value.avtar=this.profileImage.name;
}
get f() { return this.personForm.controls; }
Save()
{
  debugger
  if(this.personForm.invalid)
    {
      return;
    }
    this.personForm.value.avtar = this.profileImage.name;
    this.UserService.AddUser(this.personForm.value).subscribe({
    
      next:(value) =>{
        debugger
        console.log("success");
        this.router.navigate(['/AllMatchesComponent'])
      },
      error:(err)=>{
        console.log(err)
      }
    })
}
}
