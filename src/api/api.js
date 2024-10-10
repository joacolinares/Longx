// src/api/adminApi.js
import axios from 'axios';
const API_URL = 'https://longx-backend.vercel.app'; // Base URL of your backend API


// Register 
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

// Login 
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response;
  } catch (error) {
    throw error.response;
  }
};
// update password

export const updatePasswordUser = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/user/update/password`, data);
      return response;
    } catch (error) {
      throw error.response;
    }
  };

// forgot password
export const forgotPasswordUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/forget/password`, data);
    return response;
  } catch (error) {
    throw error.response;
  }
};

// reset password 

export const resetPasswordUser = async (id,data) => {
    try {
      const response = await axios.put(`${API_URL}/reset/password/${id}`, data);
      return response;
    } catch (error) {
      throw error.response;
    }
  }



//  user information Post request
export const requestUserInformation = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/information`, data);
    return response;
  } catch (error) {
    throw error.response;
  }
};
// user information Get request
export const getUserInformation = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/information`);
      return response;
    } catch (error) {
      throw error.response;
    }
  };

// transferWalletUser 

export const transferWalletUser = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/transfer`, data);
      return response;
    } catch (error) {
      throw error.response;
    }
  };

// getCryptoPrice
  export const getCryptoPrice = async () => {
    try {
      const response = await axios.get(`${API_URL}/crypto/price`, );
      return response;
    } catch (error) {
      throw error.response;
    }
  };
  // Wallet
  export const walletUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/wallet`, );
      return response;
    } catch (error) {
      throw error.response;
    }
  };
  // uploadPersonData
  export const uploadPersonUser = async (files) => {
    try {
        const formData = new FormData();
        files.forEach(file => {
          formData.append('files', file); // Ensure 'files' matches your backend expectations
        });
      const response = await axios.post(`${API_URL}/person/upload`,formData );
      return response;
    } catch (error) {
      throw error.response;
    }
  };
  // uploadPersonData
  export const uploadCompanyUser = async (files) => {
    try {
        const formData = new FormData();
        files.forEach(file => {
          formData.append('files', file); // Ensure 'files' matches your backend expectations
        });
      const response = await axios.post(`${API_URL}/company/upload`,formData );
      return response;
    } catch (error) {
      throw error.response;
    }
  };


    // send mail
    export const sendMailUser = async (data) => {
        try {
          const response = await axios.post(`${API_URL}/send/message`,data );
          return response;
        } catch (error) {
          throw error.response;
        }
      };


    // get company verification
    export const getCompanyVerification = async (id) => {
        try {
          const response = await axios.post(`${API_URL}/files/${id}`);
          return response;
        } catch (error) {
          throw error.response;
        }
      };




// admin Users


      export const adminUsers = async (credentials) => {
        try {
          const response = await axios.post(`${API_URL}/auth/admin/register`,credentials);
          return response;
        } catch (error) {
          throw error.response;
        }
      };

      export const loginAdminUser = async (credentials) => {
        try {
          const response = await axios.post(`${API_URL}/auth/admin/login`,credentials);
          return response;
        } catch (error) {
          throw error.response;
        }
      };

      export const getProfileWalletUser = async (credentials) => {
        try {
          const response = await axios.post(`${API_URL}/auth/admin/login`,credentials);
          return response;
        } catch (error) {
          throw error.response;
        }
      };
