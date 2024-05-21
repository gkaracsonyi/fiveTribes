CREATE TABLE independent_films (
        film_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        release_date DATE,
        director VARCHAR(100),
        description TEXT,
        cover_image TEXT,
        watch_link TEXT,
        runtime_minutes SMALLINT, -- assuming no films are longer than 4.25 hours
        language VARCHAR(50),
        mature_tag BOOLEAN NOT NULL
    );

INSERT INTO independent_films (
        title,
        release_date,
        director,
        description,
        cover_image,
        watch_link,
        runtime_minutes,
        language,
        mature_tag
    )
VALUES
    (
        'Ave Maria',
        '2021-08-29',
        'Colin Stewart',
        NULL,
        'https://fivetribescinemaproductions.com/wp-content/uploads/2021/01/AveMaria_1200x1600.png',
        'https://vimeo.com/594241418',
        9,
        'English/Spanish',
        false
    ),
    (
        'Lola in May',
        '2021-11-24',
        'Colin Stewart',
        'Lola O''Connors, a mid-20s introvert, struggles with social anxiety. One of her only outlets for self-expression is her love for hard rock. Specifically, she idolizes the front woman of her favorite band, May Hart. Who leads the otherwise all male rock band Limowreck. Tired of being shut in, she decides it''s time to let the world see who she truly is and through the process discovers something about herself and her idol.',
        'https://fivetribescinemaproductions.com/wp-content/uploads/2020/12/lola-in-may-movie-poster-JPEG.jpg',
        'https://vimeo.com/649480337',
        14,
        'English',
        true
    ),
    (
        'The Pines',
        '2020-06-10',
        'Colin Stewart',
        'Take a step into the New Jersey Pinelands in this short nature documentary. Featuring some of the Pine Barrens'' most unique creatures, this documentary covers a wide array of local wildlife. From the Pine Barrens Treefrog to the Great Egret, we''ve captured it all. Take a look and see for yourself!',
        'https://fivetribescinemaproductions.com/wp-content/uploads/2020/06/Theatrical-Poster-The-Pines-scaled.jpg',
        'https://www.youtube.com/watch?v=KUMZoC9Qb7Y',
        8,
        'English',
        false
    ),
    (
        'The Fourth',
        NULL,
        'Colin Stewart',
        NULL,
        'https://fivetribescinemaproductions.com/wp-content/uploads/2020/03/The-Fourth-Poster-Draft-5.png',
        NULL,
        NULL,
        NULL,
        false
    ),
    (
        'Homecoming',
        '2019-01-24',
        'Colin Stewart',
        'After an eight year absence from his family, John Corson returns to his family''s beach house to reflect on his past one last time.',
        'https://fivetribescinemaproductions.com/wp-content/uploads/2019/12/homecoming-poster_4-2-LOW-RES.png',
        'https://www.youtube.com/watch?v=xE9fozO_DfM',
        13,
        'English',
        false
    ),
    (
        'The Fear is Love TRAILER',
        '2019-01-12',
        'Colin Stewart',
        'Ethan Burrows graduates from the University of Columbia with aspirations of attending a PHD program for mathematics. Life, however, has other plans for him. Everything in his life seems to fall through the cracks one piece at a time. Ethan finds joy in the least likely of places, a ten year old girl named Mia. Mia is no stranger to hard times herself. Her brother was killed in a car accident right before her eyes. Together Mia and Ethan find happiness, together, through the power of music and their passion for guitar.',
        'https://fivetribescinemaproductions.com/wp-content/uploads/2019/12/poster-3.png',
        'https://www.youtube.com/watch?v=OWc_wBh95Qk',
        2,
        'English',
        false
    );