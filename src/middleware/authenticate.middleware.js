import { User } from "src/models";
import { VerifyToken } from "src/utils/token";
import { HttpException } from "./error.middleware";

async function AuthenticatedMiddleware(req, res, next) {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return next(new HttpException(401, "Unauthorised"));
  }

  try {
    const accessToken = bearer.split("Bearer ")[1].trim();
    const payload = await VerifyToken(accessToken);

    if (!payload) {
      return next(new HttpException(401, "Unauthorised"));
    }

    const user = await User.findByPk(payload.id);

    if (!user) {
      return next(new HttpException(401, "Unauthorised"));
    }

    req.user = user;
    return next();
  } catch (error) {
    return next(new HttpException(401, "Unauthorised"));
  }
}

export default AuthenticatedMiddleware;
