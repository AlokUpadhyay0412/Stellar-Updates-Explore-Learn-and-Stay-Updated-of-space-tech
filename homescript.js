document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    const spaceNews = [
        {
            title: 'NASA Discovers Water on Mars',
            description: 'NASA has discovered traces of water on the surface of Mars, indicating potential for life.',
            link: 'https://www.nasa.gov/water-on-mars'
        },
        {
            title: 'SpaceX Launches New Starship',
            description: 'SpaceX successfully launches the next-generation Starship rocket, marking a new era of space travel.',
            link: 'https://www.spacex.com/starship'
        },
        {
            title: 'James Webb Telescope Captures New Galaxies',
            description: 'The James Webb Space Telescope captures stunning images of distant galaxies, giving insights into the universe’s history.',
            link: 'https://www.jwst.nasa.gov'
        }
    ];

    spaceNews.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.description}</p>
            <a href="${news.link}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsItem);
    });
});
