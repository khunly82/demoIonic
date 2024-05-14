import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const ms: string = (value % 1000).toString().padStart(3, '0');
    const s: string = (Math.floor(value / 1000) % 60).toString().padStart(2, '0');
    const m: string = (Math.floor(value / (1000 * 60)) % 60).toString().padStart(2, '0');
    const h: string = (Math.floor(value / (1000 * 60 * 60))).toString().padStart(2, '0');

    return `${h}:${m}:${s}:${ms}`;
  }
}
