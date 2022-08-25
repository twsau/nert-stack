import app from "./app";
const PORT = process.env.port || 5000;

app.listen(5000, () => console.log(`server listening on port: ${PORT}`));
