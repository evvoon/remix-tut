import type { LinksFunction } from "@vercel/remix";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import styles from "./app.css?inline";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <LiveReload />
          <Scripts />
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="px-10 pt-5"></nav>
      <Link to="/" prefetch="intent" className="text-2xl font-semibold">
        Move<span className="text-teal-500">DB</span>
      </Link>
      <main>{children}</main>
    </>
  );
}
