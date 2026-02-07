"use client";

import styles from "./page.module.css";
import { loginAction } from "./actions";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    await loginAction();
    router.push("/profile");
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
