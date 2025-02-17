import { Permission, Role } from "./enum";

type People = {
    name: string,
    age: number
};

type Roles = {
    roleName: Role
}

type Permissions = {
    permissionLvl: Permission
}

type Employer = People & Roles & Permissions

const admin: Employer = {
    name: "Aung",
    age: 30,
    roleName: Role.SUPERADMIN,
    permissionLvl: Permission.ALL
}
console.log(admin);
