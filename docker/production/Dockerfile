FROM node:10-alpine

ENV VS_ENV prod

WORKDIR /var/www

COPY package.json ./
COPY yarn.lock ./

RUN apk add --no-cache --virtual .build-deps ca-certificates wget python make g++ \
  && apk add --no-cache git \
  && yarn install --no-cache \
  && apk del .build-deps

COPY docker/vue-storefront/vue-storefront.sh /usr/local/bin/

COPY babel.config.js /var/www/babel.config.js
COPY config /var/www/config
COPY core /var/www/core
COPY ecosystem.json /var/www/ecosystem.json
COPY .eslintignore /var/www/.eslintignore
COPY .eslintrc.js /var/www/.eslintrc.js
COPY lerna.json /var/www/lerna.json
COPY tsconfig.json /var/www/tsconfig.json
COPY tsconfig-build.json /var/www/tsconfig-build.json
COPY shims.d.ts /var/www/shims.d.ts
COPY package.json /var/www/package.json
COPY src /var/www/src
COPY var /var/www/var
COPY packages /var/www/packages

CMD ["vue-storefront.sh"]
