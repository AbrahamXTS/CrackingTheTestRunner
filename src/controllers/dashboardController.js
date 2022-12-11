import axios from "axios";

export const handleHome = async (req, res) => {

	const usuario = await axios.get("https://api.github.com/user", {
		headers: {
			"Authorization": "Bearer " + req.cookies.jwt
		}
	});

	const repositorios = await axios.get(`https://api.github.com/user/repos`, {
		headers: {
			"Authorization": "Bearer " + req.cookies.jwt
		}
	});

	res.cookie("user", usuario.data.login).render("dashboard/index", {
		title: "Inicio",
		usuario: usuario.data,
		repositorios: repositorios.data
	});
}

export const handleGetRepositorie = async (req, res) => {

	const name = req.params.id;
	const user = req.cookies.user;

	const repositorie = await axios.get(`https://api.github.com/repos/${user}/${name}`, {
		headers: {
			"Authorization": "Bearer " + req.cookies.jwt
		}
	});

	const commits = await axios.get(`https://api.github.com/repos/${user}/${name}/commits`, {
		headers: {
			"Authorization": "Bearer " + req.cookies.jwt
		}
	});

	const dateFormater = (date) => {
		return new Date(date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "2-digit" })
	}

	res.render("dashboard/repositorie", {
		title: `${name}`,
		repositorie: repositorie.data,
		commits: commits.data,
		dateFormater: dateFormater
	});
}

