create table if not exists public.products (
  id uuid primary key default uuid_generate_v4(),
  productno varchar(100) not null,
  productname text not null unique,
  description text not null,
  is_active boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- トリガーの作成（updated_atの自動更新用）
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$
 language plpgsql;

create trigger update_products_updated_at
  before update on products
  for each row
  execute function update_updated_at_column();