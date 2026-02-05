"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { User } from "@/lib/types";
import { redirect } from "next/navigation";

const MOCK_USER_KEY = "mock_user";

export default function ProfilePage() {
  const [user, setUser] = useState<User>({ name: "", email: "" });

  useEffect(() => {
    const savedData = localStorage.getItem(MOCK_USER_KEY);
    if (savedData) {
      setUser(JSON.parse(savedData) as User);
    }
  }, []);

  const editUserAction = () => {
    redirect("/edit-profile");
  };

  return (
    <>
      <h1>Perfil</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button onClick={editUserAction}>Editar</button>
    </>
  );
}
