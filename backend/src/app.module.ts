import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SupabaseService } from './supabase/supabase.service';
import { getEnvPath } from './common/helper/env.helper';

const envFilePath: string = getEnvPath(`./src/common/envs`)

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath, isGlobal: true})
  ],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
