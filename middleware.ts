import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5175');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');
    return response;
  }

  const authHeader = request.headers.get('authorization');
  
  if (request.nextUrl.pathname.startsWith('/api/admin') || 
      request.nextUrl.pathname.startsWith('/api/organizer')) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }
  
  const response = NextResponse.next();
  // Add CORS headers to all responses
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5175');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}

export const config = {
  matcher: '/api/:path*',
};
