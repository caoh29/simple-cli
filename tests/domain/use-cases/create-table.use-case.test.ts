import { CreateTable } from '../../../src/domain/use-cases/create-table.use-case';

describe('create-table.use-case.ts', () => {

  test('should create table with a base and a default limit = 10', () => {
    const base = 5;
    const table = new CreateTable().exec(base);
    expect(table).toContain(`${base} x 1 = ${base}`);
    expect(table).toContain(`${base} x 10 = ${base * 10}`);
  })

  test('should create table with a base and a specified limit', () => {
    const base = 6;
    const limit = 15;
    const table = new CreateTable().exec(base, limit);
    expect(table).toContain(`${base} x 1 = ${base}`);
    expect(table).toContain(`${base} x ${limit} = ${base * limit}`);
  })

})