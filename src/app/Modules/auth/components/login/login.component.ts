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
    this.isBusy=true
    this.subscriptions.push(
      this.authService.login(this.formBuild.value).subscribe((res:any)=>{
        if(res.isSuccess){
          this.authService.setToken(res.token);
          this.router.navigateByUrl("/home/index")
        }else{
          this.isFaild=true
        }
        this.isBusy=false
      },(err)=>{
        this.isFaild=true
        this.isBusy=false
      })
    )
  }
  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }

}
