-- timestamp_generateproducts.sql
create extension if not exists "uuid-ossp";

create table "public"."generateproducts" (
  "id" uuid not null default uuid_generate_v4(),
  "generateproductno" varchar(100) not null,
  "generateproductname" varchar not null,
  "price" integer not null,
  "isActive" boolean not null default true,
  "createdAt" timestamp not null default now(),
  "updatedAt" timestamp not null default now(),
  constraint "PK_56d92ecd3702777afcdfe06acb9" primary key ("id"),
  constraint "UQ_4c7dbef917ab5e1a95f583b4267" unique ("generateproductname")
);
