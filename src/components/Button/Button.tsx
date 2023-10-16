import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "warning" | "info" | "danger" | "secondary";
  onButtonClick?: () => void;
}

const Button = ({ children, color = "primary" }: Props) => {
  return <button className={styles["btn"]}>{children}</button>;
};

export default Button;
