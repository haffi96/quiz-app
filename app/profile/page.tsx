import createServerComponentClient from '../../supabaseConfig/supabase-server';
import Link from 'next/link';
import type { SupabaseClient } from '@supabase/supabase-js';


async function getCustomerInfo(supabase: SupabaseClient, userId?: string) {
    const { data, error } = await supabase.from("customers").select("*").eq("user_uuid", userId).limit(1)

    if (error) {
        console.log(error);
    } else {
        return data[0]
    }
}

export default async function ProfilePage() {
    const supabase = createServerComponentClient()
    const { data: { session } } = await supabase.auth.getSession()

    const customerInfo = await getCustomerInfo(supabase, session?.user.id)


    if (session && customerInfo) {
        return (
            <>
                <div className="mx-20 my-10 flex flex-col space-y-5 text-center">
                    <p>{session.user.email}</p>
                    <p>{
                        customerInfo.is_subscribed
                            ? 'Subcribed'
                            : <>
                                <Link href='/pricing'>Get Subscribed</Link>
                            </>
                    }
                    </p>
                    <p>{customerInfo.admin_role ? 'Admin' : null}</p>
                </div>
            </>
        )
    } else {
        return (
            <Link href="/login">Please Log in</Link>
        )
    }
}