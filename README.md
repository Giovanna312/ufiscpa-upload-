# 📁 API de Upload de Arquivos

API desenvolvida com NestJS para upload, listagem e remoção de arquivos (imagens), com armazenamento local e validações de formato e tamanho.

---

# 🚀 Tecnologias utilizadas

* Node.js
* NestJS
* Multer
* TypeScript

---

# 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js (v18 ou superior)
* npm ou yarn

---

# ⚙️ Instalação e execução

## 1. Clonar o repositório

```bash
git clone https://github.com/Giovanna312/ufiscpa-upload-.git
```

## 2. Acessar a pasta do projeto

```bash
cd ufiscpa-upload-/upload
```

## 3. Instalar dependências

```bash
npm install
```

## 4. Rodar o projeto

```bash
npm run start:dev
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

# 📂 Armazenamento de arquivos

Os arquivos enviados são salvos localmente na pasta:

```
/drive
```

E podem ser acessados diretamente via navegador:

```
http://localhost:3000/NOME_DO_ARQUIVO
```

---

# 📡 Guia de Endpoints

---

## 📤 Upload de Arquivo

### 🔹 POST `/arquivo/upload`

Realiza o upload de um arquivo (imagem).

### 📥 Parâmetros

* Tipo: `multipart/form-data`
* Campo obrigatório:

```
file: arquivo de imagem (jpg, jpeg, png, tiff)
```

### ⚠️ Regras

* Tamanho máximo: **5MB**
* Apenas imagens são permitidas

---

### ✅ Resposta de sucesso

```json
{
  "message": "Arquivo enviado com sucesso!",
  "filename": "file-123.png",
  "url": "http://localhost:3000/file-123.png",
  "originalname": "imagem.png",
  "size": 12345
}
```

---

### ❌ Possíveis erros

#### Arquivo muito grande (413)

```json
{
  "statusCode": 413,
  "message": "Arquivo excede o limite máximo de 5MB."
}
```

#### Formato inválido (400)

```json
{
  "statusCode": 400,
  "message": "Formato inválido. Envie apenas JPG, JPEG, PNG ou TIFF."
}
```

#### Nenhum arquivo enviado (400)

```json
{
  "statusCode": 400,
  "message": "Nenhum arquivo enviado."
}
```

---

## 📄 Listar arquivos

### 🔹 GET `/arquivo`

Retorna todos os arquivos salvos.

---

### ✅ Resposta de sucesso

```json
{
  "total": 1,
  "files": [
    {
      "filename": "file-123.png",
      "url": "http://localhost:3000/file-123.png",
      "size": 12345,
      "criado": "2026-05-25T18:53:17.181Z"
    }
  ]
}
```

---

### ❌ Possível erro

```json
{
  "statusCode": 400,
  "message": "Não foi possivel listar os arquivos."
}
```

---

## 🗑️ Remover arquivo

### 🔹 DELETE `/arquivo/:filename`

Remove um arquivo pelo nome.

---

### 📥 Parâmetro

* `filename`: nome do arquivo (ex: `file-123.png`)

---

### ✅ Resposta de sucesso

```json
{
  "mensagem": "Arquivo removido com sucesso!",
  "filename": "file-123.png"
}
```

---

### ❌ Arquivo não encontrado (404)

```json
{
  "statusCode": 404,
  "message": "Arquivo file-123.png não encontrado"
}
```

---

# 🧠 Observações importantes

* O campo do upload deve ser exatamente: **`file`**
* As imagens ficam acessíveis diretamente via URL
* O backend já possui validação de tipo e tamanho
* A pasta `/drive` é criada automaticamente

---

# ✨ Possíveis melhorias futuras

* Autenticação de usuários
* Upload múltiplo
* Integração com cloud (AWS S3, Firebase)
* Interface frontend (Angular)

---

# 👩‍💻 Autora

Desenvolvido por Giovanna 🚀

