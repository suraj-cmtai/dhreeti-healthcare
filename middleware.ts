import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  // Check if the request is for the dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Check if the user is logged in
    const isLoggedIn = request.cookies.get('isLoggedIn')?.value;
    
    // If not logged in, redirect to the login page
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // Allow the request to proceed
  return NextResponse.next();
}

// Define which paths this middleware should run on
export const config = {
  matcher: ['/dashboard/:path*']
};
