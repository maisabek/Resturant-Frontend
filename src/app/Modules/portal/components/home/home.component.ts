import { Component, Injector, SimpleChanges, TemplateRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BaseComponent } from 'src/app/Modules/shared/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent{
  DialogRef: any;

  constructor(injector:Injector){
    super(injector);
  }
  protected override ngSuperOnChanges(changes: SimpleChanges) {
  }
  protected override ngSuperOnInit() {
  }
  openDialog(templateRef:TemplateRef<any>){
    this.DialogRef.open(templateRef)
  }
  closeDialog(){
    this.DialogRef.closeAll()
  }
  innerPages:any[]=[
    {pagename:"menu",img:"assets/Images/Landing-inner-img.jpg",title:"our menu",style:"wow fadeInLeft"},
    {pagename:"foods",img:"assets/Images/foods.jpg",title:"our foods",style:"wow fadeInDown"},
    {pagename:"resturant",img:"assets/Images/drinks.jpg",title:"our resturant",style:"wow fadeInRight"},

  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
  customOptions2: OwlOptions = {
    rtl:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,

    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }

}
