import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
  private supabase: SupabaseClient;

  constructor() {}

  onModuleInit() {
    console.log(process.env.SUPABASE_URL)
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey =  process.env.SUPABASE_ANON_KEY;

    this.supabase = createClient(supabaseUrl, supabaseAnonKey);
  }

  get client(): SupabaseClient {
    return this.supabase;
  }

  async insertDataIntoTable(tableName: string, data: any) {
    const { error } = await this.supabase
      .from(tableName)
      .insert([data]);

    if (error) {
      throw new Error(`An error occurred: ${error.message}`);
    }

    return { message: 'Data inserted successfully' };
  }

  // Other methods to interact with Supabase services can be added here
}