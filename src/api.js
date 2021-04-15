export const API_URL = 'http://25.34.225.9:8080';

export function TOKEN_POST() {
  return {
    url: API_URL + '/user',
    options: {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    }
  }
}

export function USER_GET() {
  return {
    url: API_URL + '/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer',
      }
    }
  }
}

export function USER_POST(body) {
  return {
    url: API_URL + '/user',
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Allow-Controll-Origin": "*",
      },
      body: JSON.stringify(body)
    }
  }
}

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + "/updateuser",
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}