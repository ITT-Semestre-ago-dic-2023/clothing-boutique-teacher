# Clothing Boutique System
### [Ing. Israel Santiago](https://israelsantiago.com)

Project for the subject "Development and implementation of information systems". This is the demo repository that will be used as a guide for the development during the semester.

### Technical requirements:

##### Required:
- [MySQL Community Server](https://dev.mysql.com/downloads/)
- [Node@18.17.1](https://nodejs.org/en)
- [Postman](https://www.postman.com/downloads/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [ngrok](https://ngrok.com/download): Allow us to open our ports, so other folks can reach our localhost no matter where they are. Useful for teamwork.

##### Optional:
- [VS Code](https://code.visualstudio.com/download)
- [Table Plus](https://tableplus.com)
___

##### Shortcuts:
Through the course you will see me running some shortcuts in terminal to perform some actions more quickly, here are some of them, feel free to copy them and add your owns in your terminal:

1. First open your bash profile (may change depending what are you using), in this case I'm using `zshrc`

```bash
sudo nano ~/.zshrc
```

2. Add the following shortcuts, feel free to modify as your preferences:

```bash
# general user
alias bash='sudo nano ~/.zshrc'
alias src='source ~/.zshrc'
alias clr='clear'
alias rmnm='rm -rf ./**/node_modules'
alias ..='cd ..'
alias ngk='<your_ngrok_path> http'

## for git
alias init='git init'
alias clone='git clone'
alias gs='git status'
alias add='git add .'
alias am='git add . && git commit -am'
alias commit='git commit -m'
alias pull='git pull'
alias push='git push origin'
alias addremote='git remote add'
alias merge='git merge'
alias check='git checkout'
alias branch='git branch'
alias fetch='git fetch'
alias reset='git reset --soft'

#for pnpm
alias pd='pnpm dev'
alias padd='pnpm add -D'
alias pad='pnpm add'
alias par='pnpm remove'
alias p='pnpm'
alias pi='pnpm install'
alias ps='pnpm start'
alias pb='pnpm build'
alias pt='pnpm test'
alias pr='pnpm run'
```

When you finish, press `control + X` and confirm.

3. Finally, run this to refresh your terminal:

```bash
source ~/.zshrc
```

Now you are able to run all those shortcuts directly from your terminal.