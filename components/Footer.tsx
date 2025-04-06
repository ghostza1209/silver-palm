"use client";
export default function Footer() {
  return (
    <>
      <footer className="bg-primary-100 w-full">
        <p className="py-5 px-10 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Silver Palm
        </p>
      </footer>
    </>
  );
}
