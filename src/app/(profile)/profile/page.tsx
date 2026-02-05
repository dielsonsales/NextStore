"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { User } from "@/lib/types";
import { useRouter } from "next/navigation";

const MOCK_USER_KEY = "mock_user";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User>({ name: "", email: "" });

  useEffect(() => {
    const savedData = localStorage.getItem(MOCK_USER_KEY);
    if (savedData) {
      setUser(JSON.parse(savedData) as User);
    }
  }, []);

  const editUserAction = () => {
    router.push("/edit-profile");
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
