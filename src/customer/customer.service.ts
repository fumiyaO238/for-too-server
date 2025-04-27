import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  create(createCustomerDto: any) {
    return `This action adds a new customer`;
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a customer with id ${id}`;
  }

  update(id: number, updateCustomerDto: any) {
    return `This action updates a customer with id ${id}`;
  }

  remove(id: number) {
    return `This action removes a customer with id ${id}`;
  }
}
