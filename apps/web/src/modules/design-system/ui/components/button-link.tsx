import Link from "next/link";
import type { ReactNode } from "react";
import {
  type ButtonSize,
  type ButtonVariant,
  buttonClasses,
  buttonGlyphSize,
} from "./button";
import { Icon, type IconName } from "./icon";

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  children,
}: ButtonLinkProps) {
  const glyphSize = buttonGlyphSize(size);
  return (
    <Link href={href} className={buttonClasses(variant, size, fullWidth)}>
      {icon ? <Icon name={icon} size={glyphSize} strokeWidth={2} /> : null}
      {children}
      {iconRight ? (
        <Icon name={iconRight} size={glyphSize} strokeWidth={2} />
      ) : null}
    </Link>
  );
}
