import { NextResponse } from "next/server";
import { isAuth } from "./lib/auth";

export function middleware(request) {
    const allCookies = request.cookies.getAll(); // Get all cookies

    //route-guard
    if(!isAuth(request.cookies)) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    //Bot protection
    if(request.headers.get("user-agent").includes("bot")) {
        return NextResponse.rewrite(new URL("/robots.txt", request.url));
    }
    //using rewrite to serve the robots.txt file to bots
}

export const config = {
    matcher: "/about",
}