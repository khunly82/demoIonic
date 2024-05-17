import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingController } from "@ionic/angular";
import { inject } from "@angular/core";
import { finalize, forkJoin, from, map, mergeMap } from "rxjs";

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingController: LoadingController = inject(LoadingController);

  const promise = loadingController.create({
    message: 'Chargement en cours',
  }).then(loader => loader.present());

  // return forkJoin([
  //   from(promise),
  //   next(req)
  // ]).pipe(
  //   finalize(() => loadingController.dismiss()),
  //   map(([_, r2]) => r2)
  // )

  // return from(promise).pipe(
  //   mergeMap(() => next(req)),
  //   finalize(() => loadingController.dismiss())
  // );
  return next(req).pipe(finalize(() => loadingController.dismiss()));
};
