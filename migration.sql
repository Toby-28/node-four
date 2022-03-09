CREATE TABLE public.employees(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    surname varchar(45) NOT NULL,
    birth_date date NOT NULL,
    hired_date date NOT NULL,
    job_id integer NOT NULL,
    salary double precision NOT NULL
);

CREATE TABLE public.users
(
    id SERIAL PRIMARY KEY,
    balance double precision NOT NULL DEFAULT 0,
    card_number varchar(45) NOT NULL,
    name varchar(45) NOT NULL,
    surname varchar(45) NOT NULL,
    passport varchar(45) NOT NULL
);

CREATE TABLE public.jobs
(
    id SERIAL PRIMARY KEY,
    job_name varchar(45) NOT NULL
)