alter table "public"."products" drop column "createdAt";

alter table "public"."products" drop column "isActive";

alter table "public"."products" drop column "updatedAt";

alter table "public"."products" add column "created_at" timestamp with time zone default now();

alter table "public"."products" add column "is_active" boolean default true;

alter table "public"."products" add column "updated_at" timestamp with time zone default now();

alter table "public"."products" alter column "description" set not null;

alter table "public"."products" alter column "description" set data type text using "description"::text;

alter table "public"."products" alter column "productname" set data type text using "productname"::text;

alter table "public"."products" alter column "productno" set not null;

alter table "public"."products" enable row level security;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  new.updated_at = now();
  return new;
end;
$function$
;

create policy "Enable delete for users based on user_id"
on "public"."products"
as permissive
for delete
to public
using (true);


create policy "Enable read access for all users"
on "public"."products"
as permissive
for select
to public
using (true);


create policy "Enable update for authenticated users"
on "public"."products"
as permissive
for update
to public
using (true)
with check (true);


create policy "Policy with table joins"
on "public"."products"
as permissive
for update
to public
using (true);



