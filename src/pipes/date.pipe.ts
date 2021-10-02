import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Date'
})
export class DatePipe implements PipeTransform{
    transform(value: any){
        let date = new Date(value);
        return date.getMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    }
}