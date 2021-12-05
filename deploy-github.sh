#!/usr/bin/env bash

# If a command fails then the deploy stops
set -e

if [ -d "public" ]
then
    echo -e "\033[0;32mRemoving public folder except .git and README.md and CNAME \033[0m\n"
    cd public
    # find . -not -name '.git' -not -name 'README.md' -not -name 'CNAME' -delete
    find . -not -name '.git' -not -name 'README.md' -not -name 'CNAME' -not -name '.DS_Store' -not -name '.' -not -name '..' -exec rm -rf -- {} +
    cd ..
fi

echo -e "\033[0;32mDeploying updates to GitHub pages repository\033[0m\n"
# Build the project to another directory because zola will delete the submodule /public otherwise
zola build --output-dir public_zola
#Now copy built files to public directory
cp -a public_zola/ public/
rm -rf public_zola

echo -e "\033[0;32mCommit change to main repository\033[0m\n"
git add .
git commit -am "update"
git push origin main

# Go To Public folder
cd public

git checkout main
# Add changes to git.
git add .

# Commit changes.
msg="update site content $(date)"
if [ -n "$*" ]; then
    msg="$*"
fi
git commit -m "$msg"
# Push source
git push origin main
