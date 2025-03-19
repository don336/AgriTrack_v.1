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
  firstName?: String;
  email: String;
  lastName?: String;
  phone?: String;
  password: String;
}
type TrendDirection = "up" | "down" | "neutral";

export interface CardProps {
  /** The title/heading of the card */
  title: string;
  /** The main value to display */
  value: string | number;
  /** Optional percentage change */
  trend?: {
    value: number;
    direction: TrendDirection;
  };
  /** Optional icon component to display */
  icon?: React.ReactNode;
  /** Optional description text */
  description?: string;
  /** Optional CSS className for custom styling */
  className?: string;
}

export interface cropDataType {
  name: string;
  variety: string;
  plantingDate: Date;
  harvestDate: Date;
  quantity: number;
  status: string;
  notes: string;
}
