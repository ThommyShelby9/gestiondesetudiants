import { createClient } from "@supabase/supabase-js";
import {SUPABASE_URL} from '../../env'
import {SUPABASE_KEY} from '../../env'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)