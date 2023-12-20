// src/profiles/entities/profile.entity.ts
import { Profile } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProfileEntity implements Profile {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nickname: string | null;

  @ApiProperty()
  bio: string | null;

  @ApiProperty()
  userId: number; // Asegúrate de que este tipo coincida con el esquema de Prisma
}
