import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr:any[] , search:string): any {
    return arr.filter((item)=>item.user.name.toLowerCase().includes(search.toLowerCase()))
  }
}
