import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private supabaseService:SupabaseService) {}

  @Post('db/create')
  async createData(@Body() data: any) {
    try {
      const result = await this.supabaseService.insertDataIntoTable('test', data);
      return result;
    } catch (error) {
      return { error: error.message };
    }
  }
}
