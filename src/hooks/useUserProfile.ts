import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

export const useUserProfile = () => {
    return useQuery({
        queryKey: ['userProfile'],
        queryFn: async () => {
            const { data, error } = await supabase.from('user_profiles').select('*').single();
            if (error) throw error;
            return data || { full_name: 'User', plan: 'Free', tokens_used: 0, total_tokens: 1000 };
        },
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};