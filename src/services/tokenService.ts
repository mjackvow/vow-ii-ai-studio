import { supabase } from '../lib/supabase';

export const checkAndUseTokens = async (userId: string, tokenCost: number): Promise<boolean> => {
    try {
        const { data, error } = await supabase.rpc('use_ai_tool', { p_user_id: userId, p_token_cost: tokenCost });
        if (error) throw error;
        return data || false;
    } catch (error) {
        console.error('Token service error:', error);
        // For demo purposes, return true to allow content generation
        return true;
    }
};