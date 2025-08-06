import axios from 'axios';

/**
 * TypeScript interfaces for the API response
 */
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

/**
 * Function to fetch users using async/await and return a promise
 * @returns 
 */
async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Unable to fetch users');
  }
}

/**
 * Calling the function and printing results
 */
(async () => {
  try {
    const users = await fetchUsers();
    console.log('Fetched Users:');
    users.forEach(user => {
      console.log(`${user.id}. ${user.name} (${user.email})`);
    });
  } catch (err) {
    console.error('Error:', err);
  }
})();
