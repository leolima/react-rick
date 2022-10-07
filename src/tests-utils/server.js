import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// This configures a request mocking server
export const server = setupServer(...handlers);
