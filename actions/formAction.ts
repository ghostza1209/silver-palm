"use server";

import { AddContactToGs } from "@/types/form";

export async function addContactToGs(data: AddContactToGs) {
  const formData = new FormData();
  formData.append("first-name", data.firstName);
  formData.append("last-name", data.lastName);
  formData.append("phone-number", data.phoneNumber);
  formData.append("email", data.email);
  formData.append("message", data.message);

  fetch(
    "https://script.google.com/macros/s/AKfycbxkuaLvpI4J_dD1K0nB8zkK7PQuZiFuu4JwtSrKrRHZZzH3gQV1xOaMJAWDWoO2R5zSqg/exec",
    {
      method: "POST",
      body: formData,
      cache: "no-cache",
    }
  ).catch((error: Error) => {
    return {
      success: false,
      errors: error.message,
    };
  });
  return { success: true, errors: [] };
}
