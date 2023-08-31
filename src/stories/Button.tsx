//import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'md',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-blue-500' : 'bg-gray-500';
  return (
    <button
      type="button"
      className={[
        'text-white',
        'rounded',
        size === "sm" && 'px-2 py-1',
        size === "md" && 'px-4 py-2',
        size === "lg" && 'px-8 py-4',
        mode
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
