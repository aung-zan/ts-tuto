import { User } from "./generic";

type UserSummary = Pick<User, "id" | "name">;
