import axios from 'axios';
import { User } from '../interfaces/User';
import { handleError } from '../utils/errorHandler';
import { API_URLS, ERROR_MESSAGES } from '../constants/appConstants';

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(API_URLS.USERS);
    return response.data;
  } catch (error) {
    handleError(error, ERROR_MESSAGES.FETCH_USERS_FAIL);
    throw new Error(ERROR_MESSAGES.FETCH_USERS_FAIL);
  }
}
