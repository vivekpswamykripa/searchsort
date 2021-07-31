import { Student } from './student';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Students:Student[],searchValue:string): Student {
    if (!Students||!searchValue){
      return Students;
    }
    return Students.filter(student=>
      student.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      student.Qualification.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      student.Address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      student.Phone.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      student.PassoutYear.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      );
  }

}
