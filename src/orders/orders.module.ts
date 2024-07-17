import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { OrdersController } from './orders.controller';

import { envs, ORDER_SERVICE } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.ordersMicroservicesHost,
          port: envs.ordersMicroservicesPort,
        },
      },
    ]),
  ],
  controllers: [OrdersController],
})
export class OrdersModule {}
