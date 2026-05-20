import { expect, test } from "vitest";
import { ptBR } from "../../../locales/index.js";

test("Brazilian Portuguese locale error messages", () => {
  const { localeError } = ptBR();
  expect(
    localeError({
      code: "invalid_type",
      expected: "string",
      input: 123,
    })
  ).toBe("Entrada inválida: esperava um texto, recebeu um número");

  expect(
    localeError({
      code: "too_big",
      origin: "string",
      maximum: 10,
      inclusive: true,
      input: "test string that is too long",
    })
  ).toBe("Grande demais: esperava que o texto tivesse <= 10 caracteres");

  expect(
    localeError({
      code: "too_small",
      origin: "array",
      minimum: 5,
      inclusive: false,
      input: [1, 2],
    })
  ).toBe("Pequeno demais: esperava que o vetor tivesse > 5 elementos");

  expect(
    localeError({
      code: "invalid_format",
      format: "email",
      input: "invalid-email",
    })
  ).toBe("Formato do endereço de e-mail inválido");

  expect(
    localeError({
      code: "invalid_key",
      input: { foo: "bar" },
      origin: "record",
      issues: [],
      path: [],
    })
  ).toBe("Entrada inválida no registro");
});
