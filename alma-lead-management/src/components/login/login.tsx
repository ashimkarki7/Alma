"use client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import styles from "@component/login/Login.module.css";

interface LoginFormProps {
  users?: any;
  signUp: (formData: any) => Promise<void>;
  signIn: (formData: any) => Promise<void>;
}

const LoginPage: FC<LoginFormProps> = (props) => {
  const router = useRouter();
  const { signUp, signIn, users } = props;

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = () => {
    if (!id || !password) return alert("All fields required");

    if (isSignUp) {
      if (
        users?.users?.length > 0 &&
        users?.users?.find((user: any) => user.id === id)
      ) {
        return alert("User already exists");
      }
      signUp({ id, password });
      alert("User registered. You can now log in.");
      setIsSignUp(false);
    } else {
      debugger;
      const checkUserExist = users?.users?.find(
        (u: any) => u?.id === id && u?.password === password,
      );
      signIn({ id, password });
      if (checkUserExist) {
        router.push("/management");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className={`${styles.loginPageContainer}`}>
      <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
      <input
        type="text"
        placeholder="User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        {isSignUp ? "Sign Up" : "Login"}
      </button>
      <p className={styles.toggle}>
        {isSignUp ? "Already have an account?" : "New here?"}{" "}
        <span onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};
export default LoginPage;
