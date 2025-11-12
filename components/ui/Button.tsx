import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children = 'Default', className = '', style, href, ...props }) => {
  const defaultStyle: React.CSSProperties = { backgroundColor: '#B25905', color: '#ffffff' };
  const classes = `px-4 py-2 cursor-pointer font-semibold rounded inline-block ${className}`.trim();
  
  // Only apply default styles if no custom backgroundColor is provided in className or style
  const hasCustomBg = className.includes('bg-') || style?.backgroundColor;
  const finalStyle = hasCustomBg ? style : { ...defaultStyle, ...style };

  if (href) {
    return (
      <Link href={href} className={classes} style={finalStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      style={finalStyle}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;