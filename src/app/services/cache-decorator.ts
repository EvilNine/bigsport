import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

export function CachedRequest(
  cacheFactory: (this: any) =>
    { [key: string]: Observable<any> | undefined }
)
{
  return (target: any, method: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const origin = descriptor.value
    const prefix = `${target.constructor.name}.${method}`

    descriptor.value = function (...args: any[]): Observable<any> {
      const storage = cacheFactory.call(this)
      const key = `${prefix}+${JSON.stringify(args)}`
      let observable = storage[key];

      if (!!observable) return observable

      observable = origin
        .apply(this, args)
        .pipe(shareReplay(1))

      storage[key] = observable

      return observable as Observable<any>
    }

    return descriptor
  }
}
