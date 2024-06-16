CREATE TABLE independent_films 
    (
        film_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        release_date DATE,
        director VARCHAR(100),
        description TEXT,
        cover_image TEXT,
        watch_link TEXT,
        runtime_seconds SMALLINT, -- Assuming no film is over 9 hours long
        language VARCHAR(50),
        mature_tag BOOLEAN NOT NULL
    );

INSERT INTO independent_films
    (
        title,
        release_date,
        director,
        description,
        cover_image,
        watch_link,
        runtime_seconds,
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
        557,
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
        755,
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
        469,
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
        769,
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
        110,
        'English',
        false
    ),
    (
        'Drexel Rowing Dad Vails 2019',
        '2020-11-05',
        'Colin Stewart',
        'The Dad Vail Regatta is a 85 year tradition for the city of Philadelphia. It is the largest collegiate regatta in the world. Athletes from across the nation descend on the banks of the Schuylkill River every May to compete for the title of Dad Vail Champion. For Drexel University and its rowers, the Dad Vails means something more than just another race; it stands as a continuation of their team''s legacy.',
        'https://i.vimeocdn.com/video/989211907-4ed6c9f27aea94ecb3472225e5d6441ca89221c5e50faf0cbfbf328e1be71317-d_640x360',
        'https://vimeo.com/476064365',
        342,
        'English',
        false
    );