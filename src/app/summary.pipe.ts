import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform (value: string, limit?: number, prefix?: string) {
        if (!value)
            return null;

        let limitNumber = (limit) ? limit : 50;
        let textPrefix = (prefix) ? prefix+ ': ' : '';
        return textPrefix + value.substr(0, limitNumber) + '...';
    }
}