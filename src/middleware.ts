import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TOKEN_KEY } from "./utils/constants";
import { removeCookie } from "./utils";
import { verify } from "./apis/auth";

// Public urls -> user is allowed to access these without requiring auth
const PUBLIC_ROUTES = ["/login", "/signup"];

const APP_PATH = "/app/";

const middleware = async (request: NextRequest) => {
  const authStatus = auth(request);
  return authStatus;
};

// Auth
const auth = async (request: NextRequest) => {
  const currPath = request.nextUrl.pathname;
  const isPublicRoute = PUBLIC_ROUTES.includes(currPath);
  const token = request.cookies.get(TOKEN_KEY)?.value; // Getting the token from cookies
  if (!token) {
    // If there's no token and the route is public, allow access
    if (isPublicRoute) return NextResponse.next();
    // If no token and it's a protected route, redirect to home page
    return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], request.url));
  }
  const verify = await verfyUser(token);
  if (!verify) {
    removeCookie(TOKEN_KEY);
    request.cookies.delete(TOKEN_KEY);
    if (!PUBLIC_ROUTES.includes(currPath))
      return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], request.url));
  } else {
    // If token is valid and it's a public route, redirect to dashboard
    if (isPublicRoute) {
      return NextResponse.redirect(new URL(APP_PATH, request.url));
    }
    // Otherwise, allow access to protected routes
    return NextResponse.next();
  }
  return NextResponse.next();
};

const verfyUser = async (token: string) => {
  try {
    await verify({ token });
  } catch (error) {
    console.log("Unauthoried");
    return false;
  }
  return true;
};

// Apply middleware to all routes, including nested ones
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|^/$).*)", // Exclude static files, assets, and root ('/')
  ],
};

export default middleware;
