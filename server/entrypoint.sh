#!/bin/bash

npm i
npx prisma generate
npx prisma db push
npx prisma studio &
npm run dev