import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FriendDto } from './dto/friend.dto';
import { FriendAlertDto } from './dto/friendAlert.dto';
import { FriendService } from './friend.service';

@ApiTags('Friend')
@Controller('friend')
export class FriendController {
  constructor(private friendService: FriendService) {}

  // [Todo] GetUser를 이용해서 요청을 보내는 자신의 아이디(RequestID)를 확인하는거 필요
  @Post('request')
  requestFriend(@Body() friendDto: FriendDto): Promise<void> {
    return this.friendService.requestFriend(friendDto);
  }

  @Post('accept')
  acceptFriend(@Body() friendAlertDto: FriendAlertDto): Promise<void> {
    return this.friendService.acceptFriend(friendAlertDto);
  }

  // 201: success , 404: error
  @ApiResponse({ status: 201, description: '성공' })
  @ApiResponse({ status: 404, description: '실패' })
  @Delete('reject')
  rejectFriend(@Body() friendAlertDto: FriendAlertDto): Promise<void> {
    return this.friendService.rejectFriend(friendAlertDto);
  }

  @Post('block')
  blockFriend(@Body() friendDto: FriendDto): Promise<void> {
    return this.friendService.blockFriend(friendDto);
  }
}
