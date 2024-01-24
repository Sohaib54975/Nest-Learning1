import { Inject, Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(body: any) { 
    return body;
  }

  updateUser(updateUserDto: UpdateUserDto, userId: number) {
    return { updateDto: updateUserDto, Parmeters: { userId } };
  }

  getUserById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  deleteUserBy(id: number) {
     this.userRepository.delete(id);
  }
}
