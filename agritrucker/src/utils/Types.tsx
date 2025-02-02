export interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  variant: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
}

export interface userDataType {
  firstName: String;
  email: String;
  lastName: String;
  phone: String;
  password: String;
}
