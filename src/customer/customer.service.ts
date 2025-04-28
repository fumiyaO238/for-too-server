import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-user.dto';
import { Customer } from 'src/entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const bcrypt = require('bcrypt');
import { randomUUID } from 'crypto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const {
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      birthday,
      address,
      tel,
      email,
      line,
      instagram,
    } = createCustomerDto;

    const customer = this.customerRepository.create({
      uuid: randomUUID(),
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      birthday: birthday && new Date(birthday),
      address,
      tel,
      email,
      line,
      instagram,
    });

    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
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
