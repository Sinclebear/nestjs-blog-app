import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  /**
   *
   * same as...
   */
  //   boardsService: BoardsService;
  //   constructor(boardsService: BoardsService) {
  //     this.boardsService = boardsService;
  //   }

  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
