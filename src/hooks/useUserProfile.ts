import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

export const useUserProfile = () => {
    return useQuery({
        queryKey: ['userProfile'],
        queryFn: async () => {
            const { data, error } = await supabase.from('user_profiles').select('*').single();
            if (error) throw error;
            return data;
        },
    });
};