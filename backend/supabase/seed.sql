INSERT INTO public.products (productno, productname, description, "isActive")
VALUES 
    ('P-01', '親製品 1', 'Description 1', true),
    ('P-02', '親製品 2', 'Description 2', true),
    ('P-03', '親製品 3', 'Description 3', true),
    ('P-04', '親製品 4', 'Description 4', true),
    ('P-05', '親製品 5', 'Description 5', true),
    ('P-06', '親製品 6', 'Description 6', true);


INSERT INTO generateproducts (generateproductno, generateproductname, price, "isActive")
VALUES 
  ('K-01', '子製品TEST01', 100000, true),
  ('K-02', '子製品TEST02', 200000, true),
  ('K-03', '子製品TEST03', 300000, true),
  ('K-04', '子製品TEST04', 400000, true),
  ('K-05', '子製品TEST05', 500000, true),
  ('K-06', '子製品TEST06', 600000, true), 
  ('K-07', '子製品TEST07', 700000, true);