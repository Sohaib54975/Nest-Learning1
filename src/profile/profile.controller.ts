<<<<<<< Updated upstream
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
=======
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
>>>>>>> Stashed changes

@Controller('profile')
export class ProfileController {

<<<<<<< Updated upstream
  @UseGuards(AuthGuard('jwt'))
  @Get()
  profile(){
    return {message : "i am protected"}
  }
=======
    @UseGuards(JwtAuthGuard)
    @Get()
    profile() {
        return "I am Protected Route"
    }
>>>>>>> Stashed changes
}
