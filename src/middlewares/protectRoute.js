export const protectRoute = (req, res, next) => {

	const { jwt } = req.cookies;

	if (!jwt) {
		res.redirect("/auth/login");
	}

	next();
}