"use client";

import { useEffect, useEffectEvent, useState } from "react";
import styles from "./page.module.css";

const MOCK_USER_KEY = "mock_user";

export default function EditProfilePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem(MOCK_USER_KEY);
    if (savedData) {
      setUser(JSON.parse(savedData));
    } else {
      setUser({ name: "Usuário 1", email: "usuario1@next-store.com.br" });
    }
  }, []);

  const handleSave = useEffectEvent(() => {
    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(user));
  });

  return (
    <>
      <h1>Editar Perfil</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <input
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </>
  );
}
