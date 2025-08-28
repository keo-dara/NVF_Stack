docker compose -f docker-compose.test.yml up -d 
cd backend
npx @better-auth/cli@latest migrate -y