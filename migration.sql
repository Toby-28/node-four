DROP TABLE IF EXISTS employees;
CREATE TABLE public.employees(
    id TEXT PRIMARY KEY NOT NULL,
    name varchar(45) NOT NULL,
    surname varchar(45) NOT NULL,
    birth_date DATE NOT NULL,
    hired_date DATE NOT NULL DEFAULT CURRENT_DATE,
    job_id varchar(45) NOT NULL,
    work_time character varying(45) NOT NULL DEFAULT '8:00-18:00',
    salary DOUBLE PRECISION NOT NULL
);

DROP TABLE IF EXISTS users;
CREATE TABLE public.users
(
    id TEXT PRIMARY KEY NOT NULL,
    balance double precision NOT NULL DEFAULT 0,
    card_number varchar(45) NOT NULL,
    name varchar(45) NOT NULL,
    surname varchar(45) NOT NULL,
    passport varchar(45) NOT NULL
);

DROP TABLE IF EXISTS jobs;
CREATE TABLE public.jobs
(
    id TEXT PRIMARY KEY NOT NULL,
    job_name varchar(45) NOT NULL,
    description TEXT NOT NULL,
    work_time varchar(45) NOT NULL,
    salary DOUBLE PRECISION NOT NULL
);

DROP TABLE IF EXISTS products;
CREATE TABLE public.products
(
    id TEXT PRIMARY KEY NOT NULL,
    name varchar(45) NOT NULL,
    description TEXT NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    type character varying(45) NOT NULL,
    stock integer NOT NULL,
    discount DOUBLE PRECISION
);
