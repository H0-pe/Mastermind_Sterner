import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterIrrelevantRequests'
})
export class FilterIrrelevantRequestsPipe implements PipeTransform {

  transform(value: string, filterString: string): string {
    return value.toLowerCase().includes(filterString.toLowerCase()) ? value : '** not relevant **'
  }

}
