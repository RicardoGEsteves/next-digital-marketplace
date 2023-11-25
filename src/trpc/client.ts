import { createTRPCReact } from "@trpc/react-query";
import { TAppRouter } from "./index";

export const trpc = createTRPCReact<TAppRouter>({});
