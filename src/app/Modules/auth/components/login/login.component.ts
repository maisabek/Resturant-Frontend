import { Component, Injector, SimpleChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/Modules/shared/base.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent{
  formBuild!:FormGroup
  showPass:boolean=true
  isFaild:boolean=false
  constructor(injector:Injector,private authService:AuthService){
    super(injector);
  }

  protected override ngSuperOnChanges(changes: SimpleChanges) {
  }

  protected override ngSuperOnInit() {
    this.initLoginForm()
  }

  initLoginForm(){
    this.formBuild=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
  })
  }

  login(){
    this.subscriptions.push(
      this.authService.login(this.formBuild.value).subscribe((res:any)=>{
        if(res.isSuccess){
          localStorage.setItem("token",res.token)
          this.router.navigateByUrl("home")
        }else{
          this.isFaild=true
        }
      },(err)=>{
        this.isFaild=true
      })
    )
  }
  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }

}
