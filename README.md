# katagora

Updating Website:

1. Push updates to github repo
2. Do a git fetch on Putty katagora ec2 instance
3. git pull updated branch
4. npm install
5. npm run build
6. pm2 restart app

Certbot:
IMPORTANT NOTES:

-   Congratulations! Your certificate and chain have been saved at:
    /etc/letsencrypt/live/katagora.com/fullchain.pem
    Your key file has been saved at:
    /etc/letsencrypt/live/katagora.com/privkey.pem
    Your cert will expire on 2020-09-28. To obtain a new or tweaked
    version of this certificate in the future, simply run certbot again
    with the "certonly" option. To non-interactively renew _all_ of
    your certificates, run "certbot renew"
