const access_key = '';
const secret_key = '';

export const fetchPhoto = async () => {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${access_key}`);
    const data = await response.json();
    return data;
}