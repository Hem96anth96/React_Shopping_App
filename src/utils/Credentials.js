import Cookies from "js-cookie";
import { SESSION_USERNAME, VALID_PASSWORD, VALID_USERNAMES } from "./Constants";

/**
 * Verify the credentials
 *
 * @param {string} username
 * @param {string} password
 *
 * @return {boolean}
 */
export function verifyCredentials(username, password) {
  if (password !== VALID_PASSWORD) {
    return false;
  }
  return VALID_USERNAMES.includes(username);
}

/**
 * Store the data in our cookies
 *
 * @param {string} username
 *
 * @param {string} password
 */
export function setCredentials(username, password) {
  let date = new Date();
  date.setTime(date.getTime() + 10 * 60 * 1000);

  Cookies.set(SESSION_USERNAME, username, { expires: date });
}

/**
 * Remove the credentials
 */
export function removeCredentials() {
  Cookies.remove(SESSION_USERNAME);
}

/**
 * Return current logged username
 *
 * @return {string | undefined}
 */
export function currentUser() {
  return Cookies.get(SESSION_USERNAME);
}


/**
 * Check if the user is logged in with a valid username
 *
 * @return {boolean}
 */
export function isLoggedIn() {
  const sessionUsername = Cookies.get(SESSION_USERNAME);
  const isValidUsername = VALID_USERNAMES.includes(sessionUsername);

  return isValidUsername;
}


