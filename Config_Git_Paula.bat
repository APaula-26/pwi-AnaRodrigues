echo OFF

echo --- Retirando Usuario GitHUB ----

git config --global --unset-all user.mail
git config --global --unset-all user.name

echo --- Configurando Usuario GitHub ----

git config --global user.name "APaula-26"
git config --global user.email "anapauladesouzarodrigues@protonmail.com"
echo --- Mostrando a configuração atual do GitHub no computador 
git config list  
echo--- Fim ---

pause