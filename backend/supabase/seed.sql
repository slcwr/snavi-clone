-- supabase/seed.sql
insert into public.products 
(productno, productname, description, is_active)
values
('T-01', '製品TEST', '製品データ', true),
('T-02', '製品TEST2', '製品データ2', true),
('T-03', '製品TEST3', '製品データ3', false);