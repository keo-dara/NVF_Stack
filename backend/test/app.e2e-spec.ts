import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/sign up with email test', () => {
    return request(app.getHttpServer())
      .post('/api/auth/sign-up/email')
      .send({
        name: "John Doe", // required
        email: "john.doe@example.com", // required
        password: "password1234", // required
        image: "https://example.com/image.png",
      })
      .expect(200)
  })
});
