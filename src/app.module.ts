import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { MultipleChoiceModule } from './multiple-choice/multiple-choice.module';
import { FillInWordModule } from './fill-in-word/fill-in-word.module';
import { WordArrangementModule } from './word-arrangement/word-arrangement.module';
import { ListeningModule } from './listening/listening.module';
import { PronounceModule } from './pronounce/pronounce.module';
import { MultipleChoice } from './multiple-choice/entities/multiple-choice.entity';
import { FillInWord } from './fill-in-word/entities/fill-in-word.entity';
import { Listening } from './listening/entities/listening.entity';
import { Pronounce } from './pronounce/entities/pronounce.entity';
import { WordArrangement } from './word-arrangement/entities/word-arrangement.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: '12345',
      database: 'mobile',
      synchronize: false,
      entities: [
        User,
        MultipleChoice,
        FillInWord,
        Listening,
        Pronounce,
        WordArrangement,
      ],
      // __dirname + '/../**/*.entity.{js,ts}'
    }),
    // AuthModule,
    UserModule,
    AuthModule,
    MultipleChoiceModule,
    FillInWordModule,
    WordArrangementModule,
    ListeningModule,
    PronounceModule,
  ],
})
export class AppModule {}
