import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} 값이 status 옵션에 없습니다.`);
    }
    return value;
  }
  private isStatusValid(status: any) {
    // js의 indexOf는 일치하는 값이 없는 경우 -1 출력
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
