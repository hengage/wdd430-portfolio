import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-950">
          Henry Udeh
        </Link>
        <ul className="flex gap-5 text-sm font-medium text-slate-700">
          <li>
            <Link href="/" className="transition hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-blue-700">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
