import { Controller, Get } from '@nestjs/common';

interface User {
  user_id: number;
  username: string;
  email: string;
  phonenumber: string;
}

@Controller('users')
export class UsersController {
  @Get()
  getUser(): User {
    return {
      user_id: 1,
      username: 'johndoe',
      email: 'johndoe@gmail.com',
      phonenumber: '919293939493',
    };
  }
}
