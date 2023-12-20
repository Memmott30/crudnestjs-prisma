// src/users/entities/user.entity.ts

import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { ProfileEntity } from 'src/profiles/entities/profile.entity'; // Asegúrate de importar la entidad ProfileEntity

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty({ type: () => ProfileEntity, required: false }) // Indicando que el perfil es opcional
  profile?: ProfileEntity;
}
