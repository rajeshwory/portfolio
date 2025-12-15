import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Button Component
 * Reusable button with primary and secondary variants
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300 text-center";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};


