import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors"; // Importa o pacote cors

dotenv.config();

const app = express();

// Configura o middleware CORS
app.use(cors());

app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  console.log("Mensagens recebidas no backend:", messages);
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    console.log("Resposta da API OpenAI:", response.data);
    res.json(response.data);

  } catch (error) {
    console.error("Erro ao conectar à API da OpenAI:", error);
    res.status(500).json({ error: "Erro ao processar a solicitação." });
  }
});

console.log("Chave API:", process.env.OPENAI_API_KEY);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
