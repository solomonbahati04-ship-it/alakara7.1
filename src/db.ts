import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://hcxhtugtcsqpevtrilzx.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'sb_publishable_eAuj1WkH-MNFgo-ioD9FbQ_nFvHbxp-';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
