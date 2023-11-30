import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../components/errorPage/errorPage";

export default function Error() {
  //redirection to the error page
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/error"); 
    }, 10); 

    return () => clearTimeout(redirectTimer);
  }, [navigate]);
	return (
		<>
		{/* will display an Error Page when it's called */}
			<ErrorPage />
		</>
	);
}