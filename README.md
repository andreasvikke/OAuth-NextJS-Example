# OAuth NextJS Example
Documentation for NextJS Auth can be found here: https://github.com/nextauthjs/next-auth

## Create GitHub OAuth App
1. Goto Settings>Developer Settings>OAuth Apps
2. Create new app
    - Homepage: http://localhost:3000
    - Callback: http://localhost:3000/api/auth/callback/github
3. Generate Secret
4. Copy Client ID and secret

## Insert ENV variables
1. Open file ```.env.local```
2. Insert Client ID and secret
3. Insert Random values into auth secret and jwt token (smash the keyboard)

## Run the app
1. run ```npm run dev```
2. Goto: [localhost:3000](http://localhost:3000)
3. Click Signin with GitHub
4. See the magic