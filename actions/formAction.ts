"use server";

import { AddContactToGs } from "@/types/form";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";

export async function addContactToGs(data: AddContactToGs) {
  const formData = new FormData();
  formData.append("first-name", data.firstName);
  formData.append("last-name", data.lastName);
  formData.append("phone-number", data.phoneNumber);
  formData.append("email", data.email);
  formData.append("message", data.message);
  formData.append("date", format(new Date(), "MM/dd/yyyy H:i:s"));

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby3wN58jv_U6UNpR_bFAfF5HjDsdpol3-zI2dCxuruZ87oNZCu31OAn3fLl03lMyl14uw/exec",
      {
        method: "POST",
        body: formData,
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      return {
        success: false,
        errors: `Failed to submit form. Server returned status: ${response.status}`,
      };
    }

    revalidatePath("/");

    return { success: true, errors: [] };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Network error occurred";
    return {
      success: false,
      errors: errorMessage,
    };
  }
}
