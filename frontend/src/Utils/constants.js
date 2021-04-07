const BASE_URL = "http://localhost:8000";

export const LOGIN_URL = `${BASE_URL}/oauth2/login`;

export const USER_URL = `${BASE_URL}/api/user`;
export const USER_INFORMATION_URL = `${USER_URL}/information`;
export const USER_SERVERS_URL = `${USER_URL}/server`;

export const FORMS_URL = `${BASE_URL}/api/form`;
export const CREATE_FORMS_URL = `${FORMS_URL}/create/`;
export const GET_FORMS_URL = `${FORMS_URL}/list`;
export const GET_FORM_RESPONSES_URL = `${FORMS_URL}/response`;
