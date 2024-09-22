// src/utils/timeUtils.ts
export function getCurrentDateTime(): string {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `Praegune kuupäev ja kellaaeg on: ${date}, ${time}`;
  }
  