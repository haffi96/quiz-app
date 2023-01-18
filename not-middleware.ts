import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { pb_server as pb_server } from './pages/api/server_pb';

// async function initPocketBase(request: NextRequest, response: NextResponse) {
//     const pb = new PocketBase(process.env.PB_URL);

//     // load the store data from the request cookie string
//     const auth_cookie = request.headers.get('cookie');
//     if (auth_cookie) {
//         pb.authStore.loadFromCookie(auth_cookie, 'pb_auth');

//         // send back the default 'pb_auth' cookie to the client with the latest store state
//         pb.authStore.onChange(() => {
//             const stored = pb.authStore.exportToCookie()
//             console.log(stored);

//             response?.headers.set('cookie', pb.authStore.exportToCookie());
//         });

//         try {
//             // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
//             pb.authStore.isValid && await pb.collection('users').authRefresh();
//         } catch (_) {
//             // clear the auth store on failed refresh
//             pb.authStore.clear();
//         }

//         return pb
//     } else {
//         console.log("ffs");
//     }
//   }



async function middleware(request: NextRequest, response: NextResponse) {
    const { pathname } = request.nextUrl

    console.log(pb_server?.authStore.isValid);


    if (!pb_server?.authStore.isValid && pathname.includes('questions')) {
        console.log(pb_server?.authStore.isValid);
        request.nextUrl.pathname = "/login"
        return NextResponse.redirect(request.nextUrl);
    }

    if (!pb_server?.authStore.isValid && pathname.includes('admin')) {
        request.nextUrl.pathname = "/login"
        return NextResponse.redirect(request.nextUrl);
    }
}
