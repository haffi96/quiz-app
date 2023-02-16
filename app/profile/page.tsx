import createSupabaseServerClient from '../../supabaseConfig/supabase-server';
import Link from 'next/link';
import { getCustomerInfo } from '../../utils/supabaseServerHelpers';


export default async function ProfilePage() {
    const supabase = createSupabaseServerClient()
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
        return (
            <Link href="/login">Please Log in</Link>
        )
    }

    const userId = session.user.id;

    const customerInfo = await getCustomerInfo(supabase, userId)

    if (!customerInfo) {
        return (
            <Link href="/login">Please Log in</Link>
        )
    }

    return (
        <div className="container m-auto flex flex-col space-y-5 text-center">

            <p>Email: {session.user.email}</p>
            <p>
                {
                    customerInfo.is_subscribed ? 'Subscribed' : <Link href='/pricing'>Get Subscribed</Link>
                }
            </p>
            <p>{customerInfo.admin_role && 'You are an Admin'}</p>
        </div>
    )
}