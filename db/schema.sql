CREATE DATABASE sshoe_mania;
USE sshoe_mania;

Show tables;

-- ADD THE ON DELETE CASCADE CONSTRAINTS

CREATE TABLE Orders (
	order_id INT AUTO_INCREMENT NOT NULL,
    customer_id INT NOT NULL,
    payment_method_id INT,
    order_date DATE NOT NULL,
    price_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY(customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY(payment_method_id) REFERENCES Payment_Methods(payment_method_id),
    PRIMARY KEY (order_id)
);
    
CREATE TABLE Customers (
	customer_id INT AUTO_INCREMENT NOT NULL,
    customer_name VARCHAR(30) NOT NULL,
    customer_email VARCHAR(30) NOT NULL,
    customer_phone VARCHAR(15),
    PRIMARY KEY(customer_id)
);


CREATE TABLE Products (
	product_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30),
    product_price DECIMAL(6, 2) NOT NULL,
    product_information VARCHAR(30),
    stock_amount INT NOT NULL,
    PRIMARY KEY(product_id)
);

CREATE TABLE Payment_Methods (
	payment_method_id INT AUTO_INCREMENT NOT NULL,
    payment_type VARCHAR(30) NOT NULL,
    credit_card_name VARCHAR(30) NOT NULL,
    credit_card_number VARCHAR(30) NOT NULL,
    credit_card_exp_date VARCHAR(30) NOT NULL,
    PRIMARY KEY(payment_method_id)
);

CREATE TABLE Orders_Products (
	order_product_id INT AUTO_INCREMENT NOT NULL,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
    

