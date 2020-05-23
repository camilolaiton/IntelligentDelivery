
INSERT INTO user_type VALUES (1,'admin', 'intelligent delivery webpage administrator'); 
INSERT INTO user_type VALUES (2,'client', 'intelligent delivery webpage client');

SELECT * FROM user_type;


INSERT INTO delivery_state VALUES (1,'pendiente', 'El producto recibido sin pagar');
INSERT INTO delivery_state VALUES (2,'registrado', 'producto pagado, en lista de entrega');
INSERT INTO delivery_state VALUES (3,'despachado', 'producto despachado');
INSERT INTO delivery_state VALUES (4,'en transito', 'producto en transito al lugar de destino'); 
INSERT INTO delivery_state VALUES (5,'en reparto', 'producto en reparto al domiclio');
INSERT INTO delivery_state VALUES (6,'entregado', 'El producto entregado al domicilio');
INSERT INTO delivery_state VALUES (7,'cancelado', 'producto cancelado antes de entregarse');
INSERT INTO delivery_state VALUES (8,'pagado', 'producto pagado');

SELECT * FROM delivery_state;


INSERT INTO country VALUES (1,'Colombia');
INSERT INTO country VALUES (2,'Estados Unidos');
INSERT INTO country VALUES (3,'Francia');

SELECT * FROM country;

INSERT INTO delivery_type VALUES (1,'comida', 'producto que contiene comida');
INSERT INTO delivery_type VALUES (2,'electrodomestico', 'producto que contiene maquinas');
INSERT INTO delivery_type VALUES (3,'ropa', 'producto que contiene ropa');

SELECT * FROM delivery_type;

INSERT INTO user VALUES (1,'Camilo', 'Laiton', '3003393659', 'admin1@gmail.com', 'admin1', 'admin1', 1);
INSERT INTO user VALUES (2,'Jose', 'Laiton', '3116961983', 'joselaiton@gmail.com', 'joselaiton', 'joselaiton', 2);
INSERT INTO user VALUES (3,'Tania', 'Goenaga', '3015777465', 'taniagoenaga@gmail.com', 'taniagoenaga', 'taniagoenaga', 2);
INSERT INTO user VALUES (4,'Cristian', 'Vergel', '3013976849', 'cristianvergel5@gmail.com', 'cristianvergel', 'cristianvergel', 2);
INSERT INTO user VALUES (5,'Alexander', 'Bustamante', '3002341111', 'alexanderbustamante@gmail.com', 'bustamante2', 'bustamante2', 2);

SELECT * FROM user;

INSERT INTO delivery VALUES (1, 250000, 'Calle 29 K3 # 21 C 25 Barrio Los Laureles', null, 10080, null, '2019-05-17 11:39:36', null, 'magdalena', 'santa marta', 1, 3, 2, 1);
INSERT INTO delivery VALUES (2, 300000, 'Calle 29 K3 # 21 C 25 Barrio Los Laureles', null, 10080, null, '2020-02-12 08:00:00', null, 'magdalena', 'santa marta', 1, 3, 2, 1);
INSERT INTO delivery VALUES (3, 100000, 'Calle 29 K3 # 21 C 25 Barrio Los Laureles', null, 10080, null, '2020-04-13 10:00:00', null, 'magdalena', 'santa marta', 1, 3, 2, 2);
INSERT INTO delivery VALUES (4, 250000, 'Calle 29 K3 # 21 C 25 Barrio Los Laureles', null, 10080, null, '2020-03-01 09:00:00', null, 'magdalena', 'santa marta', 1, 3, 2, 7);

INSERT INTO delivery VALUES (5, 122000, 'Calle 25 K1 # 15 C 10 Barrio 11 Noviembre', null, 10080, null, '2020-05-17 11:39:36', null, 'magdalena', 'santa marta', 1, 3, 3, 3);
INSERT INTO delivery VALUES (6, 112000, 'Calle 29 K3 # 21 C 25 Barrio Los Laureles', null, 10080, null, '2020-02-12 11:39:36', null, 'magdalena', 'santa marta', 1, 3, 3, 3);
INSERT INTO delivery VALUES (7, 900100, 'Calle 25 K1 # 15 C 10 Barrio 11 Noviembre', null, 10080, null, '2020-02-13 09:01:13', null, 'magdalena', 'santa marta', 1, 3, 3, 2);
INSERT INTO delivery VALUES (8, 120000, 'Calle 29 K3 # 21 C 25 Barrio Los Laureles', null, 10080, null, '2020-04-06 08:20:13', null, 'magdalena', 'santa marta', 1, 3, 3, 7);

INSERT INTO delivery VALUES (9, 30000, 'Calle 25 K1 # 15 C 10 Barrio 11 Noviembre', null, 10070, null, '2019-02-13 9:01:13', null, 'magdalena', 'santa marta', 1, 1, 4, 1);
INSERT INTO delivery VALUES (10, 30000, 'Calle 25 K1 # 15 C 10 Barrio 11 Noviembre', null, 10070, null, '2020-03-01 09:00:00', null, 'magdalena', 'santa marta', 1, 2, 4, 2);
INSERT INTO delivery VALUES (11, 30000, 'Calle 25 K1 # 15 C 10 Barrio 11 Noviembre', null, 10070, null, '2020-04-06 08:20:13', null, 'magdalena', 'santa marta', 1, 3, 4, 3);
INSERT INTO delivery VALUES (12, 30000, 'Calle 25 K1 # 15 C 10 Barrio 11 Noviembre', null, 10070, null, '2019-02-12 11:39:36', null, 'magdalena', 'santa marta', 1, 1, 4, 3);

SELECT * FROM delivery;