import { HttpInterceptorFn } from '@angular/common/http';
import {LoadingController} from "@ionic/angular";
import {inject} from "@angular/core";
import {finalize} from "rxjs";

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingController: LoadingController = inject(LoadingController);
  loadingController.create({
    message: 'Chargement en cours',
  }).then(loader => loader.present());
  return next(req).pipe(finalize(() => loadingController.dismiss()));
};
