// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173/";

test("app shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img").first();

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith("https://cataas.com")).toBeTruthy();
});

test("changes image when button is clicked", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Obtener la primera imagen
  const image = page.getByRole("img").first();
  const button = page.getByRole("button", { name: "Get new fact" });

  // SRC inicial
  const firstSrc = (await image.getAttribute("src")) || "";

  // Click para refrescar fact + imagen
  await button.click();

  // Esperar a que el src sea diferente al anterior
  await expect(image).not.toHaveAttribute("src", firstSrc);

  // Obtener nuevo src para verificar que sigue siendo válido
  const newSrc = await image.getAttribute("src");

  expect(newSrc?.startsWith("https://cataas.com")).toBeTruthy();
});
