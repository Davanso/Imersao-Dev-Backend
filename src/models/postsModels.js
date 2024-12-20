import conectarAoBanco from "../config/db_config.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
  const db = conexao.db("alura-instabytes");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}
