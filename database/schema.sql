SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'billionspg'
  AND pid <> pg_backend_pid();


DROP DATABASE IF EXISTS billionspg;
CREATE DATABASE billionspg;
\c billionspg;

CREATE TABLE shops (
id BIGSERIAl PRIMARY KEY,
shopName VARCHAR(75) NOT NULL
);

CREATE TABLE products  (
id BIGSERIAL PRIMARY KEY,
imageurl VARCHAR(50) NOT NULL,
productName VARCHAR(50) NOT NULL,
displayPrice VARCHAR(25),
onsale BOOLEAN NOT NULL,
worth REAL NOT NULL,
salePercentage REAL,
salePrice VARCHAR(15),
shippingDisplay VARCHAR(50),
shippingEligibility BOOLEAN NOT NULL,
fk_shop_id int NOT NULL,
CONSTRAINT fk_shop
  FOREIGN KEY(fk_shop_id)
    REFERENCES shops(id)
);

CREATE TABLE similarProduct (
id BIGSERIAL PRIMARY KEY,
fk_product_id int,
fk_similarProduct_id int,

CONSTRAINT fk_product_id
  FOREIGN KEY(fk_product_id)
    REFERENCES products(id),
CONSTRAINT fk_related
  FOREIGN KEY(fk_similarProduct_id)
    REFERENCES products(id)
);

COPY shops(shopName)
FROM '/Users/thomasmcnutt/hackreactor/SDC/Recommend/shops.csv'
DELIMITER ',' CSV HEADER;

COPY products(imageUrl,productName,displayPrice,onSale,worth,shippingDisplay,shippingEligibility,salePercentage,fk_shop_id,salePrice)
FROM '/Users/thomasmcnutt/hackreactor/SDC/Recommend/products.csv'
DELIMITER ',' CSV HEADER;

COPY similarProduct(fk_product_id, fk_similarProduct_id)
FROM '/Users/thomasmcnutt/hackreactor/SDC/Recommend/similarProducts.csv'
DELIMITER ',' CSV HEADER;