CREATE TABLE product (
    productid INT AUTO_INCREMENT PRIMARY KEY,
    productname VARCHAR(50) NOT NULL,
    category VARCHAR(10) NOT NULL,
    price INT NOT NULL,
    imageUrl VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL
);

CREATE TABLE buyer (
    id INT,
    address VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
);

CREATE TABLE seller (
    id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (id)
        REFERENCES user (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
);