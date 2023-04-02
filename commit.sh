#!/bin/bash

echo '---------'
echo "git add"
echo '---------'

git add .

read -p "Enter your commit message: " message
echo '---------'

git commit -m "$message"

echo '---------'
echo "pushing to git repository"
echo '---------'

git push

echo '---------'
echo "Successfully pushed to GitHub!"
echo '---------'

# Command for pm2 to start it is
# pm2 start npm -- start
