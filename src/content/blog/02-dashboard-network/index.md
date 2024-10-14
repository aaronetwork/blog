---
title: "How to Install Aaron Network Dashboard"
description: "Learn how to install and set up the Aaron Network Dashboard from our GitHub repository."
date: "Sep 23 2024"
---

## About Dashboard

This open-source project is a blockchain network dashboard designed to track and visualize historical data for blockchain networks. The dashboard provides users with insights into key network metrics such as the total number of accounts, changes in supply, shifts in staked and unstaked tokens, and fluctuations in inflation rates. By offering a clear and intuitive interface, this tool enables users to monitor the evolution of blockchain networks over time, making it a valuable resource for developers, analysts, and anyone interested in blockchain data. Its open-source nature encourages collaboration and continuous improvement, ensuring that the dashboard remains a robust and adaptable solution for blockchain ecosystem monitoring.

There are two dashboard repositories. The first one is backend and the second one is frontend. Both products need to be deployed. The backend needs to be deployed first.

## Backend deploying 

1. `cp .env.example .env`
2. Run `php artisan key:generate`
3. Fill your data on `.env`:
```shell
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

CHAIN_API_URL=
```
4. Run `php artisan migrate`
5. Run `php artisan schedule:work` (add to cron on production)

## Frontend deploying

1. `npm install`
2. Open `.env.development` and `.env.production`
3. Fill your API url address, site name, denom and minimal denom:
```text
VITE_CHAIN_API_URL=https://
VITE_API_URL=https://
VITE_SITE_NAME="Aaron Network"
VITE_DENOM=""
VITE_MINIMAL_DENOM=""
```
4. `npm run dev`

## Questions

For questions and support please write to [aaronetwork@proton.me](mailto:aaronetwork@proton.me)
