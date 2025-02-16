import axios from 'axios';

const baseUrl = 'https://pixabay.com';
const endPoint = '/api';

export function getImg(searchName) {
  const params = new URLSearchParams({
    key: '48827773-420cc6a3931f90379a2431d96',
    q: searchName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = baseUrl + endPoint + `?${params}`;
  return axios.get(url);
}
