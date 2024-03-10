"use client";
export default function GoogleMap() {
  return (
    <div className="google-maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d869.4438962865164!2d98.3367855953333!3d7.986689098868008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTknMTIuMCJOIDk4wrAyMCcxMy4wIkU!5e1!3m2!1sen!2sth!4v1709997616283!5m2!1sen!2sth"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
}
