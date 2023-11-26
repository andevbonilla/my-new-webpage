import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    '/((?!_next|api/auth).*)(.+)'
  ],
}

export async function middleware(req: NextRequest) {

    if (req.nextUrl.pathname === "/") {

        // in english
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;

    }else if(req.nextUrl.pathname === "/es"){

        // in spanish
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;

    }else if(req.nextUrl.pathname === "/ja"){

        // in spanish
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;

    }else if(req.nextUrl.pathname === "/hi"){

        // in spanish
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;

    }else if(req.nextUrl.pathname === "/fr"){

        // in spanish
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;

    }else if(req.nextUrl.pathname === "/ch"){

        // in spanish
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;

    }else{

        const redirectUrl = new URL('/', req.url);
        return NextResponse.redirect(redirectUrl);

    }
    
}