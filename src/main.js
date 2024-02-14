import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Ваш унікальний ключ доступу до Pixabay API
const apiKey = '42208062-89bae71b6ac9d6683cff7159b';

// Опис інших змінних та ініціалізація SimpleLightbox

// Опис функції для виконання HTTP-запиту та обробки результатів

// Обробка події натискання на кнопку пошуку
document
  .getElementById('search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.trim();

    if (searchTerm === '') {
      iziToast.error({ message: 'Please enter a search term.' });
      return;
    }

    // Очистка галереї перед новим запитом
    document.getElementById('gallery-container').innerHTML = '';

    // Виклик функції для виконання HTTP-запиту та отримання результатів
  });

function searchImages(searchTerm) {
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`;

  // Виконання HTTP-запиту
  axios
    .get(apiUrl)
    .then(response => {
      const images = response.data.hits;

      if (images.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again.',
        });
      } else {
        // Відображення зображень у галереї
        displayImages(images);
      }
    })
    .catch(error => {
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
      });
    });
}

function displayImages(images) {
  const galleryContainer = document.getElementById('gallery-container');
  const lightbox = new SimpleLightbox();

  images.forEach(image => {
    // Створення HTML-розмітки для кожної картки зображення
    const cardHTML = `<div class="gallery-card">
                        <a href="${image.largeImageURL}" data-lightbox="gallery">
                          <img src="${image.webformatURL}" alt="${image.tags}">
                        </a>
                        <p>Likes: ${image.likes}</p>
                        <p>Views: ${image.views}</p>
                        <p>Downloads: ${image.downloads}</p>
                      </div>`;

    // Додавання картки до галереї
    galleryContainer.innerHTML += cardHTML;
  });

  // Оновлення SimpleLightbox
  lightbox.refresh();
}
