import { defineConfig } from "vitest/config"

// eslint-disable-next-line
export default defineConfig({
  test: {
    globals: true,
    environment: "node"
  }
})
