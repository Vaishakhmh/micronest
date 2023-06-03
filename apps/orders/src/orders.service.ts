import { Injectable } from '@nestjs/common';
import { CreatOrder } from './DTO/createOrder.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}
  async createOrder(req: CreatOrder) {
    return this.ordersRepository.create(req);
  }
  async getOrder() {
    return this.ordersRepository.find({});
  }
}
