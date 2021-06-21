export const API_URL = 'http://localhost:8080';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }
  }
}

export function USER_GET(token) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
}

export function PRO_GET() {
  return {
    url: API_URL + '/pro',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer',
        "Allow-Controll-Origin": "*",
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
    },
  }
}

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + "/updateuser",
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Allow-Controll-Origin": "*",
      },
      body: JSON.stringify(body)
    }
  }
}

export function CHAT_GET() {
  return {
    url: API_URL + '/chat/:id',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer',
        "Allow-Controll-Origin": "*",
      }
    }
  }
}

export function CHAT_POST(body) {
  return {
    url: API_URL + "/chat",
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Allow-Controll-Origin": "*",
      },
      body: JSON.stringify(body)
    }
  }
}