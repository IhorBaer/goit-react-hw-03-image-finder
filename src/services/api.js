import axios from 'axios';

const key = '27427780-272f3c3176bd20ac81d314700';
axios.defaults.baseURL = 'https://pixabay.com/api';

export async function fetchImage(search, page) {
  const { data } = await axios.get(`/`, {
    params: {
      key: key,
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
  return data;
}
