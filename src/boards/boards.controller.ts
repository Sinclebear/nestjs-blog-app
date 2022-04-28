import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

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
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    // @Body() body,
    // @Body('title') title: string,
    // @Body('description') description: string,
    @Body() createBoardDto: CreateBoardDto,
  ): Board {
    // console.log(body);
    // console.log('title', body.title);
    // console.log('description', body.description);
    // return this.boardsService.createBoard(title, description);
    return this.boardsService.createBoard(createBoardDto);
  }
  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }
}
