import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../lib/database.types';

export default createBrowserSupabaseClient<Database>()
