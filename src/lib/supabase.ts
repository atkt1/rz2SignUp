import { createClient } from '@supabase/supabase-js';
import { ENV } from './constants';

export const supabase = createClient(
  ENV.SUPABASE_URL,
  ENV.SUPABASE_ANON_KEY
);