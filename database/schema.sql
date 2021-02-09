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
productType VARCHAR(25),
CONSTRAINT fk_shop
  FOREIGN KEY(fk_shop_id)
    REFERENCES shops(id)
);

COPY shops(shopName)
/root/Database/Thomas-Service
FROM '/home/ec2-user/Thomas-Service/shops.csv'
DELIMITER ',' CSV HEADER;

COPY products(productType,imageUrl,productName,displayPrice,onSale,worth,shippingDisplay,shippingEligibility,salePercentage,fk_shop_id,salePrice)
FROM '/home/ec2-user/Thomas-Service/products.csv'
DELIMITER ',' CSV HEADER;
