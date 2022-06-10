DROP TABLE "sessions";
DROP TABLE "users";
Drop TABLE "urls";


CREATE TABLE IF NOT EXISTS "users" (
    "id" serial PRIMARY KEY,
    "name" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL,
    "created" timestamp NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "sessions" (
    "id" serial PRIMARY KEY,
    "userId" integer NOT NULL REFERENCES "users"("id"),
    "token" text NOT NULL UNIQUE,
    "isValid" boolean NOT NULL DEFAULT true
    "created" timestamp NOT NULL DEFAULT now(),
);

CREATE TABLE IF NOT EXISTS "urls" (
    "id" serial PRIMARY KEY,
    "baseUrl" text NOT NULL,
    "shortUrl" text NOT NULL,
    "userId" integer NOT NULL REFERENCES "users"("id"),
    "visits" int NOT NULL DEFAULT 0,
    "created" timestamp NOT NULL DEFAULT now(),
    "isActive" boolean NOT NULL DEFAULT true
);
