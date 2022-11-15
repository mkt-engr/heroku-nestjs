import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import { truncate } from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.prisma.user.findMany();
  }
  findAllWithPosts() {
    //Postの中身を全て返す
    // return this.prisma.user.findMany({
    //   include: {
    //     posts: true,
    //   },
    // });
    //Postのタイトルだけ返す
    return this.prisma.user.findMany({
      include: {
        posts: {
          select: {
            id: true,
            title: true,
            content: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findOneWithPost(id: number) {
    console.log({ id }, 'findOneWithPost');
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        posts: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
