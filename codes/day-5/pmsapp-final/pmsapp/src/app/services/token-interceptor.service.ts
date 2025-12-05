import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";

export const TokenInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn):
    Observable<HttpEvent<unknown>> => {

    const tokenSvc = inject(TokenStorageService)
    const token = tokenSvc.getToken()

    if (token !== null) {
        const copy = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        })
        return next(copy)
    }
    else
        return next(req)
}