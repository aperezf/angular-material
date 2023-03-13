import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'themeName'
})
export class ThemeNamePipe implements PipeTransform {

  transform(value: string | null): string {
    switch(value) {
      case 'light':
        return 'Tema claro';
      case 'dark':
        return 'Tema oscuro';
      default:
        return 'No definido'
    }
  }

}
