import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Make sure to install jwt-decode

const TokenCheck = () => {
  const token = useSelector((state) => state.reducer.token);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      // Check if token exists
      if (!token) {
        navigate('/login');
        console.log("token not found");
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        // Check if token is expired
        if (decodedToken.exp < currentTime) {
          navigate('/login');
        } else {
          navigate('/to-do'); // Redirect to todo page if token is valid
        }
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    };

    checkToken();
  }, [token, navigate]);

  return null; // This component doesn't render anything
};

export default TokenCheck;
