
import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name:'searchFilter'
})
export class SearchFilterPipe implements PipeTransform{
  transform(users, searchTerm){
    if(!users || !searchTerm){
      return users;
    }
    return users.filter(user=>
      user.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
  }
}
