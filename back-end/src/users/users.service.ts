import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Auth42userDto } from 'src/auth/dto/auth.42user.dto';
import { GameService } from 'src/game/game.service';
import { UserProfileDto } from './dto/user.profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @Inject(forwardRef(() => GameService))
    private gameService: GameService,
  ) {}

  async createUser(user: Auth42userDto): Promise<void> {
    return this.userRepository.createUser(user);
  }

  async findByNickname(nickname: string): Promise<User> {
    return this.userRepository.findByNickname(nickname);
  }

  async findByUser(user: User): Promise<User> {
    return this.userRepository.findByUser(user);
  }

  async infoUser(user: User, nickName?: string): Promise<UserProfileDto> {
    if (nickName) {
      user = await this.userRepository.findByNickname(nickName);
    }
    const gameRecord = await this.gameService.getGamesByUserId(user);
    return this.userRepository.infoUser(user, gameRecord);
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  async searchUsers(search: string): Promise<User[]> {
    return this.userRepository.searchUsers(search);
  }

  async checkNickname(nickname: string): Promise<boolean> {
    return this.userRepository.checkNickname(nickname);
  }

  async updateUser(
    user: User,
    nickName?: string,
    profileImg?: string,
  ): Promise<User> {
    return this.userRepository.updateUser(user, nickName, profileImg);
  }
}
