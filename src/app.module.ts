import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '192.168.0.111',
      port: 3306,
      username: 'root',
      password: '061127',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true
    }), 
    SequelizeModule.forFeature([Livro])
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
