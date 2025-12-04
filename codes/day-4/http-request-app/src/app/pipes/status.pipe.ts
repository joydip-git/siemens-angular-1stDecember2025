import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'status',
})
export class StatusPipe implements PipeTransform {
    transform(value: boolean, ...args: string[]): string {
        return `Task: ${args[0].toLocaleUpperCase()}, with id:${args[1]} ${value ? ' COMPLETED' : ' NOT COMPLETED'}`
        //const copy = {...obj}
    }
}

//new StatusPipe().transform(true,'a',100)