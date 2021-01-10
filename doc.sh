#!/bin/env bash
yarn doc
git checout gh-pages
mv -f doc/* ./
git add .
git commit -m 'update'
git push
git checkout main