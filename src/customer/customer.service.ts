import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-user.dto';
import { Customer } from 'src/entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const bcrypt = require('bcrypt');
import { randomUUID } from 'crypto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

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

  async findOne(uuid: string): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      where: { uuid },
    });

    if (!customer) {
      throw new Error('Customer not found');
    }

    return customer;
  }

  async update(
    uuid: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.customerRepository.findOne({ where: { uuid } });

    if (!customer) {
      throw new Error('Customer not found');
    }

    customer.firstName = updateCustomerDto.firstName || customer.firstName;
    customer.lastName = updateCustomerDto.lastName || customer.lastName;
    customer.firstNameKana =
      updateCustomerDto.firstNameKana || customer.firstNameKana;
    customer.lastNameKana =
      updateCustomerDto.lastNameKana || customer.lastNameKana;
    customer.birthday = updateCustomerDto.birthday || customer.birthday;
    customer.address = updateCustomerDto.address || customer.address;
    customer.tel = updateCustomerDto.tel || customer.tel;
    customer.email = updateCustomerDto.email || customer.email;
    customer.line = updateCustomerDto.line || customer.line;
    customer.instagram = updateCustomerDto.instagram || customer.instagram;

    return this.customerRepository.save(customer);
  }

  remove(id: number) {
    return `This action removes a customer with id ${id}`;
  }
}
