# kaya-doc-django-tailwind

## Visão Geral
O **HealthMirror** é um projeto baseado no framework Django, destinado ao gerenciamento de informações de médicos e seus perfis. Utiliza Tailwind CSS para estilização e SQLite como banco de dados.

## Tecnologias Utilizadas
- **Django**: Framework web em Python
- **SQLite**: Banco de dados
- **Tailwind CSS**: Framework de estilização CSS
- **Node.js**: Utilizado para compilação de CSS com PostCSS

## Configuração do Ambiente

1. Clone o repositório:
   ```sh
   git clone https://github.com/Chyod-s/kaya-doc-django-tailwind
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd HealthMirror
   ```
3. Crie e ative um ambiente virtual:
   ```sh
   python -m venv .venv
   source .venv/bin/activate  # Linux/macOS
   .venv\Scripts\activate  # Windows
   ```
4. Instale as dependências:
   ```sh
   pip install -r requirements.txt
   ```
5. Execute o servidor local:
   ```sh
   python manage.py runserver
   ```

## Estrutura do Projeto
- **healthMirror/**: Contém arquivos principais do projeto Django (configuração, URLs, etc.).
- **doctors/** e **medicos/**: Apps Django para gerenciamento de informações dos médicos.
- **static/**: Arquivos estáticos (CSS, JS, fontes, imagens).
- **templates/**: Páginas HTML do projeto.
