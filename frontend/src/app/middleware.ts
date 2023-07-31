import {NextMiddleware} from "next/server";
import {MiddlewareConfig} from "next/dist/server/lib/route-resolver";

export const middleware: NextMiddleware = async (request, event) => {
};

export const config: MiddlewareConfig = {
  matcher: [
    "/about/:path*",
    "/projects/:path*",
  ],
  files: [],
};
