// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { UserDTO } from './user.dto';
// import { UsersService } from './users.service';

// @Controller('users')
// export class UsersController {
//   constructor(private usersService: UsersService) {}

//   @Get()
//   async getAllUsers(): Promise<UserDTO[]> {
//     return await this.usersService.getAllUsers();
//   }

//   @Get(':id')
//   async getUserById(@Param('id') id: string): Promise<UserDTO> {
//     return await this.usersService.getUserById(id);
//   }

//   @Post()
//   async newUser(@Body() user: UserDTO): Promise<UserDTO> {
//     return await this.usersService.newUser(user);
//   }

//   @Put(':id')
//   async updateUser(
//     @Param('id') id: string,
//     @Body() user: UserDTO,
//   ): Promise<UserDTO> {
//     return await this.usersService.updateUser(id, user);
//   }

//   @Delete(':id')
//   async deleteUser(@Param('id') id: string): Promise<void> {
//     return await this.usersService.deleteUser(id);
//   }
// }
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
  Param,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
//import { Auth } from '../auth/auth.decorator';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UserDTO[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  //@ApiBearerAuth()
  //@UseGuards(AuthGuard('jwt'))
  async getUserById(@Param('id') id: string): Promise<UserDTO> {
    return await this.usersService.getUserById(id);
  }

  @Post()
  async newUser(@Body() user: UserDTO): Promise<UserDTO> {   
    return await this.usersService.newUser(user);
  }

  @Put(':id')
  //@ApiBearerAuth()
  //@UseGuards(AuthGuard('jwt'))
  async updateUser(
    // @Param('id', ValidUserIdPipe) id: string,
    @Param('id') id: string,
    @Body() user: UserDTO,
  ): Promise<UserDTO> {
    return await this.usersService.updateUser(id, user);
  }

  // @UseGuards(AuthGuard('jwt'))
  //@ApiBearerAuth()
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.usersService.deleteUser(id);
  }

  // @Get('/get')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  // async getUserById(@Request() req: any): Promise<UserDTO> {
  //   const { id } = req.user;
  //   return await this.usersService.getUserById(id);
  // }

  // @Post()
  // async newUser(@Body() user: UserDTO): Promise<UserDTO> {
  //   return await this.usersService.newUser(user);
  // }

  // @Put('/put')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  // async updateUser(
  //   @Request() req: any,
  //   @Body() user: UserDTO
  // ): Promise<UserDTO> {
  //   const { id } = req.user;
  //   return await this.usersService.updateUser(id, user);
  // }

  // @UseGuards(AuthGuard('jwt'))
  //@ApiBearerAuth()
  // @Delete('/delete')
   async deleteUser(@Request() req: any): Promise<void> {
  //   const { id } = req.user;
  //   return await this.usersService.deleteUser(id);
  // }
}
