import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit{
  @Input() person: any;
  EditpersonForm:FormGroup

  country=[{"name":"India"},{"name":"USA"},{"name":"Japan"},{"name":"Uk"},{"name":"UAE"}];
  UserImageDisplay:any;
  profileImage: any;
  constructor(
    private fb: FormBuilder,
    public UserService:UserServiceService,
    private router:Router
  ) {}
  ngOnInit(): void {
   
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

  editFormFRedirection(id:any)
  {
    debugger
this.router.navigate(['/EditFormComponent'], { queryParams: { id: id } })
  }
  deleteFormData(id:any)
  {
    this.UserService.deleteUser(id).subscribe({
    
      next:(value) =>{
        debugger
        console.log("success");
       window.location.reload();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
