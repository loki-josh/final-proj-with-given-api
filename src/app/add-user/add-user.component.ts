import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { SharedService } from '../shared/shared.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  genderAarry: any = ['male', 'female', 'Not Specified'];
  statusArray: any = ['Active', 'Suspended'];
  selectedstatus: any;

  userForm !: FormGroup
  actionBtn: any = "save"
  title: any = "Add user form"
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private serviece: SharedService,
    private dialogref: MatDialogRef<AddUserComponent>) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      "firstname": new FormControl("", [Validators.required]),
      "lastname": new FormControl("", [Validators.required]),
      "gender": new FormControl("", [Validators.required]),
      "dateofbirth": new FormControl("", [Validators.required]),
      "status": new FormControl("", [Validators.required]),


    });

    // if (this.editData) {
    //   this.title = "Edit form"
    //   this.actionBtn = "Update"
    //   this.userForm.controls['name'].setValue(this.editData.name);
    //   this.userForm.controls['date'].setValue(this.editData.date);
    //   this.userForm.controls['email'].setValue(this.editData.email);
    //   this.userForm.controls['gender'].setValue(this.editData.gender);
    //   this.userForm.controls['phone'].setValue(this.editData.phone);
    // }
  }


  addUser() {
    // console.log(this.userForm.value)
    this.serviece.formData(this.userForm.value)
  }
























  // addUser() {
  //   if (!this.editData) {
  //     if (this.userForm.valid) {
  //       this.serviece.postUser(this.userForm.value).subscribe((responce) => {
  //         this.userForm.reset();
  //         this.dialogref.close("save")
  //         window.alert("posted user successfully")

  //       })
  //       error: () => {
  //         window.alert("error while adding the user")
  //       }


  //     }
  //     else {
  //       this.updateUser()
  //     }
  //   }
  // }



  // updateUser() {
  //   this.serviece.putUser(this.userForm.value, this.editData.id)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res)
  //         window.alert("user updated sucessfully")
  //         this.userForm.reset();
  //         this.dialogref.close('update');
  //       },
  //       error: () => {
  //         window.alert("error while updating the user")
  //       }
  //     })
  // }


}
function formconrol(arg0: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null))[]): any {
  throw new Error('Function not implemented.');
}

