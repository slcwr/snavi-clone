-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create products table
create table "public"."products" (
    "id" uuid default uuid_generate_v4() primary key,
    "productno" varchar(100),
    "productname" varchar not null unique,
    "description" varchar,
    "isActive" boolean default true,
    "createdAt" timestamp default current_timestamp,
    "updatedAt" timestamp default current_timestamp
);

-- Add trigger for updating updatedAt
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new."updatedAt" = current_timestamp;
    return new;
end;
$$
 language plpgsql;

create trigger update_products_updated_at
    before update on products
    for each row
    execute function update_updated_at_column();
