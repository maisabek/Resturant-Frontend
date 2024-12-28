import { Component, Inject, Injector, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/Modules/shared/base.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent {
  showPass: boolean = true
  @ViewChild('myTemplate', { static: true }) myTemplate: any
  message: string = ""
  registerForm!:FormGroup
  isFeild:boolean=false
  errors:[]=[]
  constructor(injector: Injector,private authService:AuthService) {
    super(injector)
  }
  protected override ngSuperOnChanges(changes: SimpleChanges) {
  }
  protected override ngSuperOnInit() {
    this.initRegisterForm()
  }
  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }

  initRegisterForm(){
    this.registerForm = new FormGroup({
      UserName: new FormControl("", Validators.required),
      Email: new FormControl("", [Validators.required, Validators.email, Validators.pattern('.*com$')]),
      Password: new FormControl("", [Validators.required, Validators.minLength(7)]),
      phone: new FormControl("",[Validators.required,Validators.maxLength(11)])
    });
  }
  registerFn() {
    this.subscriptions.push(
      this.authService.register(this.registerForm.value).subscribe((res:any)=>{
        if(res.isSuccess){
          localStorage.setItem("token",res.token)
          this.router.navigateByUrl("/home")
        }
      },err=>{
        this.errors=err.error.errors;
      })
    )

  }

  openModal(templateRef: TemplateRef<any>) {
  }
  hideModal() {
  }


}
