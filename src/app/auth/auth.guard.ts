import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import {Store} from '@ngrx/store';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot } from "@angular/router";
import * as fromRoot from '../app.reducer';
import { take } from "rxjs/operators";


@Injectable() 
export class AuthGuard implements CanActivate, CanLoad{

    constructor(private store: Store<fromRoot.State>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    }

    canLoad(route: Route) {
        return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    }

} 