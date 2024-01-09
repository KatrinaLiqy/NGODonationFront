const SERVER_ORIGIN = '';


const loginUrl = `${SERVER_ORIGIN}/login`;


export const loginuser = (credential) => {
  const formData = new FormData();
  formData.append("username", credential.username);
  formData.append("password", credential.password);

  console.log("user here ", credential.username)
  return fetch(loginUrl, {
    method: 'POST',
    credentials: 'include',
    body: formData
  }).then(response => {
    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
    return response.json(); 
  })
  .catch(error => {
    // Log error for debugging purposes
    console.error('Login Error:', error);
    throw error; 
  });
}

export const loginadmin = (credential) => {
  const formData = new FormData();
  formData.append("adminname", credential.username);
  formData.append("password", credential.password);

  console.log("admin here ", credential.username)
  return fetch(loginUrl, {
    method: 'POST',
    credentials: 'include',
    body: formData
  }).then(response => {
    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
    return response.json(); 
  })
  .catch(error => {
    // Log error for debugging purposes
    console.error('Login Error:', error);
    throw error; 
  });
}


const registerUrl = `${SERVER_ORIGIN}/register`;


export const register = (data) => {
  return fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Registration failed. Please check your details and try again.');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Registration Error:', error);
    throw error; // Re-throw to allow the calling function to handle it
  });
}


const logoutUrl = `${SERVER_ORIGIN}/logout`;


export const logout = () => {
  return fetch(logoutUrl, {
    method: 'POST',
    credentials: 'include',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Logout failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Logout Error:', error);
    throw error; 
  });
}