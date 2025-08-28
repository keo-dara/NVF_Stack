import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication({
      bodyParser: false,
    });
    await app.init();
  });

  it('/sign up with email test', () => {
    return request(app.getHttpServer())
      .post('/api/auth/sign-up/email')
      .send({
        name: "John Doe",
        email: `${Date.now()}@example.com`, 
        password: "password1234",
        image: "https://example.com/image.png",
      })
      .expect(200)
  })
});
