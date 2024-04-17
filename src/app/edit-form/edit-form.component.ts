import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  country=[{"name":"India"},{"name":"USA"},{"name":"Japan"},{"name":"Uk"},{"name":"UAE"}];
  EditpersonForm:FormGroup;
UserImageDisplay: any;
  profileImage: any;
  personId:any;
  getInfoDatabyId:any
  constructor(
    private fb: FormBuilder,
    public UserService:UserServiceService,
    private router:Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      debugger
      this.personId = params['id'];
     
    });
this.editDataCall();


    this.EditpersonForm = this.fb.group({
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

  editDataCall()
  {
    this.UserService.getUser(this.personId).subscribe({
    
      next:(value) =>{
        debugger
        this.getInfoDatabyId = value;
        this.EditpersonForm.setValue({
          avtar: this.getInfoDatabyId.avtar,
          name: this.getInfoDatabyId.name,
          email: this.getInfoDatabyId.email,
          dob: this.getInfoDatabyId.dob,
          countryNameSelected: this.getInfoDatabyId.countryNameSelected
        })
        console.log(this.EditpersonForm);
        console.log("success");
      },
      error:(err)=>{
        console.log(err)
      }
    })

   
    
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
this.EditpersonForm.value.avtar=this.profileImage.name;
}
get f() { return this.EditpersonForm.controls; }
Save()
{
  debugger
  if(this.EditpersonForm.invalid)
    {
      return;
    }
    if(this.profileImage != undefined)
    this.EditpersonForm.value.avtar = this.profileImage.name;
    this.UserService.updateUser(this.personId,this.EditpersonForm.value).subscribe({
    
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
