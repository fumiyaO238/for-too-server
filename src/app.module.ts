import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerNote } from './entities/customer-note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'for-too',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'for-too',
      entities: [Customer, CustomerNote],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Customer, CustomerNote]),
  ],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
