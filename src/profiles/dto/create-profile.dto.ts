// src/profiles/dto/create-profile.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nickname: string;

  @IsString()
  @ApiProperty()
  bio?: string;

  @IsNotEmpty()
  @ApiProperty()
  userId: number;
}
