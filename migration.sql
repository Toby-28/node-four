CREATE TABLE public.employees(
    id integer NOT NULL,
    name text NOT NULL,
    surname text NOT NULL,
    birth_date date NOT NULL,
    hired_date date NOT NULL,
    job_id integer NOT NULL,
    salary double precision NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.users
(
    id integer NOT NULL,
    balance double precision NOT NULL DEFAULT 0,
    card_number text NOT NULL,
    name text NOT NULL,
    surname text NOT NULL,
    passport text NOT NULL,
    PRIMARY KEY (id)
);