export enum Role {
    USER,
    SUPERVISOR,
    ADMIN,
    SUPERADMIN
};
console.log(Role.SUPERADMIN);

export enum Permission {
    CREATE = "CREATE",
    READ = "READ",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    ALL = "ALL",
}
console.log(Permission.ALL);
