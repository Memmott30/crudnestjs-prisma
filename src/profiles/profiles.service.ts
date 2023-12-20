import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    return this.prisma.profile.create({ data: createProfileDto });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: number) {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
