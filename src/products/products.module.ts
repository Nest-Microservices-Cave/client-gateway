import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ProductsController } from './products.controller';

import { envs, PRODUCT_SERVICE } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.productsMicroservicesHost,
          port: envs.productsMicroservicesPort,
        },
      },
    ]),
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
