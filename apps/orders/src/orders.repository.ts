import { DatabaseRepository } from '@common/common';
import { Order } from './schemas/order.schema';
import { Logger } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';

export class OrdersRepository extends DatabaseRepository<Order> {
  protected logger = new Logger(OrdersRepository.name);
  constructor(
    @InjectModel(Order.name) orderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }
}
