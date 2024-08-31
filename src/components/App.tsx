import React from 'react';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Toaster } from 'react-hot-toast';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreButton from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface UnsplashResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const fetchImages = async (searchQuery: string, pageNumber: number = 1): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<UnsplashResponse> = await axios.get(
        `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${searchQuery}&client_id=TSbBG3h_a7jQ5jDLzjdT3V7e6o0rgBOzttd6iPuWvEg`
      );
      if (pageNumber === 1) {
        setImages(response.data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
    fetchImages(searchQuery, 1);
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = (image: Image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={openModal} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreButton onClick={loadMoreImages} />}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </>
  )
}

export default App;
