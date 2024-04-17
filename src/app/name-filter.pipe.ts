import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(persons: any[], searchQuery: any) {
    debugger
    if (!persons || !searchQuery) {
      return persons;
    }

    return persons.filter(person =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

}
