"use server";

export async function fetchExchangeRate() {
  const apiKey = process.env.EXCHANGERATE_API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/UAH`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 * 5 } 
    });

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      const errorData = await response.json();

      return { error: errorData["error-type"] };
    }
  } catch (error) {
    return { error: "network-error" };
  }
}
