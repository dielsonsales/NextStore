"use server";

import { USER_SESSION_KEY } from "@/proxy";
import { cookies } from "next/headers";

// const USER_SESSION_KEY =

export async function loginAction() {
  const cookieStore = await cookies();
  cookieStore.set(USER_SESSION_KEY, "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 3600, // 1 hour
  });
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(USER_SESSION_KEY);
}
