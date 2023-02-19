"use strict";

function Logout() {
  var router = useRouter();
  useEffect(function () {
    localStorage.removeItem("token");
    router.push("/login");
  }, []);
  return null;
}