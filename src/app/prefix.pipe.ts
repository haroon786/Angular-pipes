import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  // transform(value: any,geneder:string): any {
  //   console.log(value+geneder)
  //   if(geneder.toLowerCase()=="male")
  //   {
  //     return "Mr." + value;
  //   }
  //   else
  //   {
  //     return "Miss." + value
  //   }
  // }
  transform(value: string, gender: string): string {
    // let newStr = `${before} ${value}`;
    // return newStr;
    if(gender.toLowerCase()=="male")
    {
        return "MR." + value +"the King"
    }
    else
    {
      return "Miss." + value +"the queen"
    }
  }

}
