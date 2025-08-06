import axios from 'axios';
import { ERROR_MESSAGES } from '../constants/appConstants';

export function handleError(error: unknown, context: string): void {
  if (axios.isAxiosError(error)) {
    console.error(`${context} — ${ERROR_MESSAGES.AXIOS_ERROR_PREFIX} ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`${context} — Error: ${error.message}`);
  } else {
    console.error(`${context} — ${ERROR_MESSAGES.UNKNOWN_ERROR}`);
  }
}
