'use client';
import React from 'react';
import NextLink from 'next/link';
import { useRouter as useNextRouter, useParams as useNextParams, usePathname } from 'next/navigation';

export function Link({ to, href, children, ...props }) {
  const target = href || to || '/';
  return (
    <NextLink href={target} {...props}>
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useNextRouter();
  return (path) => {
    if (typeof path === 'number') {
      if (typeof window !== 'undefined') window.history.go(path);
    } else {
      router.push(path);
    }
  };
}

export function useLocation() {
  const pathname = usePathname() || '/';
  return { pathname };
}

export function useParams() {
  const params = useNextParams();
  return params || {};
}

export default Link;
