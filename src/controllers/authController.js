import axios from "axios";

export const handleLogin = (_, res) => {
	res.render("auth/login", {
		title: "Inicio de sesión",
	});
}

export const handleLoginSubmit = async (req, res) => {

	const { data } = await axios.post("https://github.com/login/oauth/access_token", {
		"client_id": "58802c3ff153bf4f0347",
		"client_secret": "e0dda3bca5716c15720f1a9bc7decc89ee99df78",
		"code": req.query.code,
	});

	const jwt = data.split("&")[0].substr(13);

	res.cookie("jwt", jwt).redirect("/");
}