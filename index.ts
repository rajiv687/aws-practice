import axios from 'axios';
import { DogResponse } from './interfaces/Dog';
import { Post } from './interfaces/Post';
import { DOG_API, POSTS_API } from './constants/urls';

async function fetchDogImage(): Promise<DogResponse> {
  const res = await axios.get<DogResponse>(DOG_API);
  return res.data;
}

async function fetchPosts(): Promise<Post[]> {
  const res = await axios.get<Post[]>(POSTS_API);
  return res.data;
}

async function fetchInParallelData() {
  try {
    console.log('Fetching dog image and posts in parallel...');

    const [dog, posts] = await Promise.all([
      fetchDogImage(),
      fetchPosts()
    ]);

    console.log('Dog Image URL:', dog.message);
    console.log(`Total Posts: ${posts.length}`);
    console.log('First Post:', posts[0].title);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchInParallelData();
