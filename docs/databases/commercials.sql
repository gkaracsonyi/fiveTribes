CREATE TABLE commercials
    (
        film_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        release_date DATE,
        director VARCHAR(255),
        description TEXT,
        cover_image TEXT,
        watch_link TEXT,
        runtime_seconds SMALLINT NOT NULL, -- Assuming no film is over 9 hours long
        language VARCHAR(50),
        mature_tag BOOLEAN NOT NULL
    );

INSERT INTO commercials
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
        'Ocean City Aquatic & Fitness Center',
        '2021-11-23',
        'Colin Stewart',
        'A TV spot for the Ocean City Aquatic & Fitness Center.',
        'https://i.vimeocdn.com/video/1309017576-60e3bcc8cdba3f3b392d867961e98bd4bc0e574ca80e09b84_640x360',
        'https://vimeo.com/649152561',
        60,
        'English',
        false
    ),
    (
        'Ocean City Holiday (Spot A)'
        '2024-01-3',
        'Colin Stewart',
        NULL,
        'https://i.vimeocdn.com/video/1777200995-d868c5ab3fb20757db07861887f1cc7249148be2cf7ef91484b0803510eaef8e-d_640x360',
        'https://vimeo.com/899521394',
        15,
        'English',
        false
    ),
    (
        'Ocean City Holiday (Spot B)'
        '2024-01-3',
        'Colin Stewart',
        NULL,
        NULL,
        'https://vimeo.com/899521335',
        15,
        'English',
        false
    ),
    (
        'Habitat for Humanity: Cape May County',
        '2021-05-24',
        'Colin Stewart',
        'Take a sneak peak into the work these volunteers are doing for Habitat for Humanity in Cape May County.',
        'https://i.vimeocdn.com/video/1145793885-ba01ee72befa16d031732e684331697c58a065d51e14dc7997482ed174fb34e1-d_640x360',
        'https://vimeo.com/554415734',
        60,
        'English',
        false
    ),
    (
        'Guthrie Glass & Metal Atlantic City Reel',
        '2021-04-24',
        'Colin Stewart',
        'Guthrie Glass & Metal is a woman owned, commercial glazing contractor based in southern New Jersey. It continues to successfully and competitively perform work of the highest quality. Guthrie Glass & Metal has come to specialize in the unique application of glass and metal in construction projects. Take a look at their Atlantic City construction reel.',
        'https://i.vimeocdn.com/video/1120273347-ffd76303d2261cf9d18c1b2b522d0bfed3dcb1a3c009c3da225cfc32551ce4c2-d_640x360',
        'https://vimeo.com/541163549',
        120,
        NULL,
        false
    ),
    (
        'MFit Gym: Challenge Yourself',
        '2020-09-28'
        'Colin Stewart',
        '"Challenge Yourself. You''ll be glad you did!" MFit Gym is openning their newest facility in Ocean View, New Jersey. The gym will be oriented towards athletes and powerlifters. Take a look inside!',
        'https://i.vimeocdn.com/video/984180463-86774bb1d6c95992aa5521b45d5dd0ed838fdde7fd02c74664896881cb8bcd29-d_640x360',
        'https://vimeo.com/473262357',
        30,
        NULL,
        false
    );