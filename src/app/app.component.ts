import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  obj:any;
obj1:any;
obj2:any;
  
  form:any;

  UserName: any;
  Email: any;
  NickName: any;
  Password: any;
  Gender: any;
  Dob:Date;
  dob:Date;


  userfield:any;
  emailfield:any;
  namefield:any;
  passwordfield:any;
  genderfield: any;
  coursefield: any;
  dobfield:Date;

  isEditable:boolean = false;

  public formData:any=[];
  isEmpty: boolean;
  

  public CourseName:any=
  [
    {id:1, name: "MBA"},
    {id:2, name: "MCA"},
    {id:3, name: "B TECH"},
    {id:4, name: "M TECH"},
    {id:5, name: "PG"}
  ];
  courseselected: any;
 
  selectedLink: string;

  

   
  
  

constructor()
{

}


post()
{ 

 this.obj=
 {
  "userName" : this.UserName,
  "email" : this.Email,
  "nickName" : this.NickName,
  "password" : this.Password,
  "gender" : this.Gender,
  "course" : this.courseselected,
  "dob" : this.Dob
 }
 this.formData.push(this.obj);
console.log(this.obj);
this.default();
this.isEmpty=true;
this.form.reset();
}

  onSubmit(form: NgForm) 
  {
    // form['course']=this.CourseName[]
    if (form.valid) 
    {
      console.log(form.value);
    }
  }

  delete(index)
  {
    this.formData.splice(index,1);
  }
  onChange(coursename)
   {
    this.courseselected = coursename;
    console.log("Selected Value :",this.courseselected);
   }

  //  onChangeGender(selectegender)
  //  {
  //   this.genderselected=selectegender;
  //   console.log("Selected Gender",this.genderselected);
  //  }

   setRadio(gender: string): void   
   {  
   
         this.selectedLink = gender;  
           
   }

  //  setDate(Dob: any): void   
  //  {  
   
  //        this.dob = Dob;  
           
  //  }   

   


  // save(list)
  // {
  //   console.log(list);
  // this.UserName = list.userName;
  // this.Email = list.email;
  // this.NickName = list.nickName;
  // this.Password = list.password;
  // }

  update()
  {
    var obj1 = 
    {
      "userName":this.userfield,
      "email":this.emailfield,
      "nickName":this.namefield,
      "password":this.passwordfield,
      "gender" : this.genderfield,
      "course" : this.coursefield,
      "dob":this.dobfield
    }
    console.log(this.obj1);
  }

  default()
  {
    this.obj="";
//  {
//   "UserName":"",
//   "Email" : "",
//   "NickName" : "",
//   "Password" : "",
//   "Gender" : "",
//   "Course" : ""

//  }
  }
}
