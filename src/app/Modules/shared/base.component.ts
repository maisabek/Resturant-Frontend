import { AfterViewInit, Component, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  template:''
})
export abstract class BaseComponent implements OnChanges,OnInit,AfterViewInit,OnDestroy{
  router: Router;
  route: ActivatedRoute;
  fb:FormBuilder
  isBusy:boolean=false
  protected subscriptions: Array<Subscription> = [];
  ngUnsubscribe = new Subject<void>();

  constructor(injector:Injector){
    this.router = injector.get(Router);
    this.route = injector.get(ActivatedRoute);
    this.fb=injector.get(FormBuilder);

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngSuperOnChanges(changes)
  }
  ngOnInit(): void {
   this.ngSuperOnInit()
  }

  ngAfterViewInit(): void {
   this.ngSuperAfterViewInit()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.ngSuperOnDestroy()
  }
  protected abstract ngSuperOnChanges(changes: SimpleChanges): any;
  protected abstract ngSuperOnInit(): any;
  protected abstract ngSuperAfterViewInit(): any;
  protected abstract ngSuperOnDestroy(): any;
}
