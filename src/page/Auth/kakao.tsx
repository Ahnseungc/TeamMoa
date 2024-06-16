import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userAtom } from "src/atom";

const Kakao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    const code = location.search.slice(6);
    const grantType = "authorization_code";
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res: any) => {
        const { access_token } = res.data;
        setUser({
          accessToken: access_token,
        });
        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )
          .then((res: any) => {
            setUser({
              id: res.data.id.toString(),
              name: res.data.properties.nickname,
              img: res.data.properties.profile_image,
              email: res.data.kakao_account.email,
            });
            navigate("/signup");
          });
      })
      .catch((Error: any) => {
        navigate("/");
        alert("로그인을 다시 시도 하세요.");
      });
  }, []);

  return <div>로딩중</div>;
};

export default Kakao;
