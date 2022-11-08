import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

//PartialTypeは引数の型を全てオプショナルにする
export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
