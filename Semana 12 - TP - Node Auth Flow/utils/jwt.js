import jwt from "jsonwebtoken";

export const createToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60 + "s",
  }); //1HORA
};

export const authRequired = (req, res, next) => {
  /*GETTING THE authorization HEADER FROM THE REQUEST*/
  const authHeader = req.headers["authorization"];

  /**Get the Token value from the header, normaly its in a format like: 'Bearer xxxxxx' */
  const token = authHeader && authHeader.split(" ")[1];

  /**If the token is null, it will return a 401 status code*/
  if (token == null) return res.sendStatus(401);

  /**Verifying the token and if it is valid, it will return the user*/
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    /**logging the error to the console */
    console.log(err);
    /**If there is an error, it will return a 403 status code */
    if (err) return res.sendStatus(403);
    /**Setting the user to the request */
    req.user = user;
    /**Calling the next middleware in the chain */
    next();
  });
};
