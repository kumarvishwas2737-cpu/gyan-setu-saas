import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {auth} from "@clerk/nextjs/server";

let supabaseInstance: SupabaseClient | null = null;

export const createSupabaseClient = (): SupabaseClient | null => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('[Supabase] Missing environment variables. Database features will be disabled.');
        return null;
    }

    if (!supabaseInstance) {
        supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
            async accessToken() {
                return ((await auth()).getToken());
            }
        });
    }

    return supabaseInstance;
}
