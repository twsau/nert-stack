import app from "./app";
const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
