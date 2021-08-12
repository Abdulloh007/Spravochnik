import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(searchList , searchSrt: string, fieldName = '') {
    if ( searchList.length === 0 || searchSrt === '' ) {
      return searchList;
    }
    return searchList.filter(elements => elements.title.toLowerCase().indexOf(searchSrt.toLowerCase()) !== -1  );
  }

}
