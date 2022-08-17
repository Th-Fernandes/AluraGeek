import Link from "next/link";
// import PropTypes from "prop-types";

export function NextLink({href, children}) {
  return (
    <Link href={href} passHref>
      <a>
        {children}
      </a>
    </Link>
  )
}
