import { supabase } from '../lib/supabase';

export const checkAndUseTokens = async (userId: string, tokenCost: number): Promise<boolean> => {
    const { data, error } = await supabase.rpc('use_ai_tool', { p_user_id: userId, p_token_cost: tokenCost });
    if (error) throw error;
    return data;
};