# Guia de Git e GitHub Pages

Para quem nunca usou Git. Se você já usa, o `README.md` tem a versão curta.

## Antes de começar

Você precisa de:

- uma conta no GitHub;
- o Git instalado (<https://git-scm.com/downloads>);
- um editor de código (VS Code, por exemplo).

Configure seu nome e e-mail uma única vez, na sua máquina:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## Parte 1 — Fork

Um **fork** é uma cópia do repositório na sua conta. Você mexe na sua cópia à vontade, sem
afetar o original.

1. Abra o repositório da atividade.
2. Clique em **Fork**, no canto superior direito.
3. Confirme em **Create fork**.

Você será levado para `github.com/SEU-USUARIO/acessibilidade-unidade3-atividade`. Repare que
embaixo do nome aparece "forked from ...". É assim que o GitHub sabe para onde o seu Pull Request
deve ir depois.

## Parte 2 — Clone

**Clone** é baixar o repositório para o seu computador.

Na página do seu fork, clique no botão verde **Code** e copie o endereço HTTPS. Depois, no
terminal:

```bash
git clone https://github.com/sandro-sa/acessibilidade-unidade3-atividade.git
cd acessibilidade-unidade3-atividade
```

Se o `git clone` pedir senha e recusar a sua senha do GitHub: o GitHub não aceita mais senha no
terminal. Você precisa de um **Personal Access Token** (`Settings` → `Developer settings` →
`Personal access tokens` → `Tokens (classic)` → `Generate new token`, marcando o escopo `repo`) e
usa o token no lugar da senha. Alternativa mais simples: instale o
[GitHub CLI](https://cli.github.com/) e rode `gh auth login`.

## Parte 3 — Branch

Uma **branch** é uma linha de trabalho paralela. Trabalhar numa branch separada mantém a `main`
intacta e deixa o Pull Request limpo.

```bash
git checkout -b correcao
```

Confira em qual branch você está a qualquer momento:

```bash
git branch
```

O asterisco marca a branch atual.

## Parte 4 — Editar e salvar o trabalho

Abra o `index.html` no editor e vá corrigindo. De tempos em tempos, salve o progresso:

```bash
git status                              # o que mudou
git add index.html                      # marca o arquivo para o commit
git commit -m "Adiciona landmarks"      # grava a mudança
```

O ciclo `add` → `commit` se repete quantas vezes você quiser. Faça um commit por bloco do
checklist: fica muito mais fácil revisar depois — e, se você quebrar alguma coisa, dá para voltar
ao commit anterior.

Ver o histórico:

```bash
git log --oneline
```

## Parte 5 — Push

**Push** envia os commits do seu computador para o GitHub.

```bash
git push -u origin correcao
```

O `-u origin correcao` só é necessário na primeira vez. Depois, basta `git push`.

Recarregue a página do seu fork no navegador: a branch `correcao` já vai estar lá.

## Parte 6 — GitHub Pages

O **GitHub Pages** publica os arquivos do repositório como um site de verdade, com endereço
público e gratuito.

1. No **seu fork**, clique em **Settings** (a engrenagem, na barra de abas do repositório — não a
   configuração da sua conta).
2. No menu da esquerda, clique em **Pages**.
3. Em **Source**, escolha **Deploy from a branch**.
4. Em **Branch**, selecione **`correcao`** e a pasta **`/ (root)`**.
5. Clique em **Save**.

Espere de 1 a 2 minutos e recarregue a página. No topo vai aparecer:

> Your site is live at `https://SEU-USUARIO.github.io/acessibilidade-unidade3-atividade/`

Abra esse endereço e confirme que é a **sua versão corrigida** que aparece.

### Se o Pages não funcionar

| Sintoma                                           | Causa provável                                                                                                                                                      |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erro 404                                          | O deploy ainda não terminou (espere mais 2 min), ou a branch escolhida em Settings não é a que tem seu `index.html`                                                 |
| Aparece a página **original**, sem suas correções | Você selecionou a branch `main` em vez de `correcao`, ou esqueceu de dar `git push`                                                                                 |
| Página sem estilo nenhum                          | O CSS deste projeto está dentro do próprio `index.html`, então isso não deveria acontecer. Se acontecer, verifique se você não removeu o bloco `<style>` sem querer |
| Não aparece o menu **Pages** em Settings          | O repositório está privado e sua conta é gratuita. Deixe o fork público                                                                                             |

Toda vez que você fizer `git push` na branch publicada, o Pages atualiza sozinho em cerca de um
minuto.

## Parte 7 — Pull Request

O **Pull Request** (PR) é o pedido para incorporar suas mudanças no repositório de origem. Nesta
atividade ele funciona como a entrega: o professor vê o diff, comenta e fecha.

1. Vá até o seu fork no GitHub.
2. Aparece uma faixa amarela com **Compare & pull request**. Se não aparecer, clique em
   **Contribute** → **Open pull request**.
3. Confira as quatro caixinhas no topo:
   - **base repository:** o repositório do professor · **base:** `main`
   - **head repository:** o seu fork · **compare:** `correcao`
4. O corpo do PR já vem preenchido com um formulário. Complete todos os campos — principalmente o
   **link do GitHub Pages**.
5. Clique em **Create pull request**.

### Depois de abrir o PR

- Se você fizer mais commits e der `git push` na branch `correcao`, **o PR se atualiza sozinho**.
  Não abra um segundo PR.
- Um teste automático vai rodar. Veja o resultado na aba **Checks**.
- Responda aos comentários do professor ali mesmo, no PR.

---

## Erros comuns

**"Escrevi na `main` sem querer."**
Sem problema. Crie a branch agora — ela leva junto o que você já fez:

```bash
git checkout -b correcao
git push -u origin correcao
```

**"Fiz commit da mensagem errada."**
Se ainda não deu push:

```bash
git commit --amend -m "Mensagem correta"
```

**"Quero desfazer as alterações de um arquivo que ainda não commitei."**

```bash
git restore index.html
```

**"O professor atualizou o repositório original e quero as novidades."**

```bash
git remote add upstream https://github.com/sandro-sa/acessibilidade-unidade3-atividade.git
git fetch upstream
git merge upstream/main
```

**"Meu PR mostra centenas de arquivos alterados."**
Geralmente é fim de linha ou indentação reformatada pelo editor. Verifique se algum
"formatador automático" reescreveu o arquivo inteiro ao salvar. No VS Code:
`Format On Save` desligado para este projeto.

---

## Glossário rápido

| Termo            | O que é                                                         |
| ---------------- | --------------------------------------------------------------- |
| **repositório**  | A pasta do projeto, com todo o histórico de mudanças            |
| **fork**         | Sua cópia do repositório de outra pessoa, na sua conta          |
| **clone**        | Baixar um repositório para o seu computador                     |
| **branch**       | Uma linha de trabalho paralela dentro do repositório            |
| **commit**       | Um ponto salvo no histórico, com mensagem descrevendo a mudança |
| **push**         | Enviar commits do seu computador para o GitHub                  |
| **pull request** | Pedido para incorporar suas mudanças em outro repositório       |
| **diff**         | A comparação que mostra exatamente o que mudou, linha a linha   |
| **upstream**     | O repositório original, do qual você fez o fork                 |
