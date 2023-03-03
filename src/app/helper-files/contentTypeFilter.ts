import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-interface';

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {
  transform(contents: Content[], type?: string): Content[] {
    if (type) {
      return contents.filter(content => content.type === type);
    } else {
      return contents.filter(content => !content.type);
    }
  }
}