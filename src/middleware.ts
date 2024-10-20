import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TOKEN_KEY } from "./utils/constants";

// Public urls -> user is allowed to access these without requiring auth
const PUBLIC_ROUTES = ["/login", "/signup", "/verify"];

const middleware = (request: NextRequest) => {
  const currPath = request.nextUrl.pathname;
  const isPublicRoute = PUBLIC_ROUTES.includes(currPath);
  const token = request.cookies.get(TOKEN_KEY); // Getting the token from cookies

  if (!token) {
    // If there's no token and the route is public, allow access
    if (isPublicRoute) return NextResponse.next();

    // If no token and it's a protected route, redirect to home page
    return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], request.url));
  }
  const verify = true;
  if (!verify) {
    // If the token verification fails, delete the token and redirect
    request.cookies.delete(TOKEN_KEY);
    return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], request.url));
  } else {
    // If token is valid and it's a public route, redirect to dashboard
    if (isPublicRoute) {
      return NextResponse.redirect(new URL("/dashboard/", request.url));
    }

    // Otherwise, allow access to protected routes
    return NextResponse.next();
  }
};
// Apply middleware to all routes, including nested ones
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|^/$).*)", // Exclude static files, assets, and root ('/')
  ],
};

export default middleware;
