import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rdyjkmbzkddqikonnizv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkeWprbWJ6a2RkcWlrb25uaXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMDczMDAsImV4cCI6MjA2Mjg4MzMwMH0.lBvgIYHl7O4sREChE9BJbnglIGDR2mPD6sYvA3HDNbM';
export const supabase = createClient(supabaseUrl, supabaseKey);