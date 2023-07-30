import {NextMiddleware} from "next/server";
import {MiddlewareConfig} from "next/dist/server/lib/route-resolver";
import {Database} from "@database/database";

export const middleware: NextMiddleware = async (request, event) => {
  const database = new Database();
  await database.start();
};

export const config: MiddlewareConfig = {
  matcher: [
    "/about/:path*",
    "/projects/:path*",
  ],
  files: [],
};
