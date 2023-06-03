import { Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreatOrder } from './DTO/createOrder.dto';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  async createOrder(req: CreatOrder) {
    return this.ordersService.createOrder(req);
  }

  @Get()
  async getOrders() {
    return this.getOrders();
  }
}
