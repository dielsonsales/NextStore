"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { User } from "@/lib/types";
import { useRouter } from "next/navigation";

const MOCK_USER_KEY = "mock_user";

const DEFAULT_USER: User = {
  name: "Usuário 1",
  email: "usuario1@next-store.com.br",
};

export default function EditProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User>({ name: "", email: "" });

  useEffect(() => {
    const savedData = localStorage.getItem(MOCK_USER_KEY);
    if (savedData) {
      setUser(JSON.parse(savedData) as User);
    } else {
      setUser(DEFAULT_USER);
    }
  }, []);

  function handleSave() {
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(user));
    router.push("/profile");
  }

  return (
    <div className={styles.editProfilePageContainer}>
      <h1 className="pageTitle1">Editar Perfil</h1>
      <form
        className={styles.editProfilePageForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className={styles.editProfileInputField}>
          <p className={styles.editProfileText}>Username:</p>
          <input
            className={styles.editProfileInput}
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
          <p className={styles.editProfileText}>E-mail:</p>
          <input
            className={styles.editProfileInput}
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <button className={styles.editProfileSaveButton} type="submit">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}
