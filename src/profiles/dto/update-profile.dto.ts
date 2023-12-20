import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfileDto } from './create-profile.dto';
import { IsString } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @ApiProperty({ required: false })
  @IsString()
  nickname?: string;

  @ApiProperty({ required: false })
  @IsString()
  bio?: string;
}
