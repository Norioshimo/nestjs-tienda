import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

@Injectable()
export class FilesService {
  getStaticProductImage(imageName: string) {
    const path = join(__dirname, '../../static/products', imageName);

    if (!existsSync(path)) {
      throw new BadRequestException('No existe la imagen del prodcuto');
    }

    return path;
  }
}
