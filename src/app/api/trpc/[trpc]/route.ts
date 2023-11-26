import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

function handler(req: Request, res: Response) {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // @ts-expect-error: context already passed from express middleware at server.ts where we use trpcExpress
    createContext: () => ({}),
  });
}

export { handler as GET, handler as POST };
