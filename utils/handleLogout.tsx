import supabaseBrowser from '../supabaseConfig/supabase-browser';



export const handleLogout = async () => {
    const { error } = await supabaseBrowser.auth.signOut();

    if (error) {
        console.log({ error });
    }
};
