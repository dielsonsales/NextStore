import { NextRequest, NextResponse } from "next/server";

export const USER_SESSION_KEY = "user_session";

const LOGIN_ROUTE = "/login";
const PROFILE_ROUTE = "/profile";
const EDIT_PROFILE_ROUTE = "/edit-profile";

// Previous middleware.ts which was deprecated in favor of proxy.ts
export function proxy(request: NextRequest) {
  const session = request.cookies.get(USER_SESSION_KEY);
  const isProfilePage = request.nextUrl.pathname.startsWith(PROFILE_ROUTE);
  const isEditProfilePage =
    request.nextUrl.pathname.startsWith(EDIT_PROFILE_ROUTE);

  if (!session && (isProfilePage || isEditProfilePage)) {
    return NextResponse.redirect(new URL(LOGIN_ROUTE, request.url));
  }

  return NextResponse.next();
}
